import { useImmer } from 'use-immer';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

// import {
// 	// ADD_COLUMN,
// 	MOVE_TICKET,
// 	// RENAME_COLUMN,
// 	REORDER_COLUMNS,
// 	REORDER_TICKETS,
// } from '../../features/columns/columnsSlice';

import Column from '../Column';

import './Board.css';

const Board = () => {
	// const [ticketId, setTicketId] = userImmer(5);
	const [tickets, setTickets] = useImmer({
		t1: { id: 't1', content: 'Take out the garbage' },
		t2: { id: 't2', content: 'Watch my favorite show' },
		t3: { id: 't3', content: 'Charge my phone' },
		t4: { id: 't4', content: 'Cook dinner' },
	});

	const [columnId, setColumnId] = useImmer(6);
	const [order, setOrder] = useImmer(['c1', 'c2', 'c3', 'c4', 'c5', 'c6']);
	const [columns, setColumns] = useImmer({
		c1: {
			id: 'c1',
			title: 'Backlog',
			tickets: ['t1', 't2', 't3', 't4'],
		},
		c2: {
			id: 'c2',
			title: 'Drafting',
			tickets: [],
		},
		c3: {
			id: 'c3',
			title: 'Line Work',
			tickets: [],
		},
		c4: {
			id: 'c4',
			title: 'Shading',
			tickets: [],
		},
		c5: {
			id: 'c5',
			title: 'Done',
			tickets: [],
		},
		c6: {
			id: 'c6',
			title: 'Archived',
			tickets: [],
		},
	});

	const isSameColumn = (src, dst) => src.droppableId === dst.droppableId;
	const didNotMove = (src, dst) =>
		isSameColumn(src, dst) && src.index === dst.index;

	const AddColumn = () => {
		// column id increments
		const cid = `c${columnId + 1}`;

		setColumnId((draft) => draft.columnId++);
		setColumns(
			(draft) => (draft[cid] = { id: cid, title: 'New Column', tickets: [] })
		);
		setOrder((draft) => {
			draft.push(cid);
		});
	};
	const DeleteColumn = (cid) => {
		setColumns((draft) => {
			delete draft[cid];
		});
		setOrder((draft) => {
			const index = draft.findIndex((col) => col === cid);
			if (index !== -1) draft.splice(index, 1);
		});
	};
	const RenameColumn = (cid, title) => {
		setColumns((draft) => {
			draft[cid].title = title;
		});
	};
	const ReorderColumns = (src, dst, column) => {
		setOrder((draft) => {
			draft.splice(src, 1);
			draft.splice(dst, 0, column);
		});
	};

	const MoveTicket = (src, dst, ticket) => {
		setColumns((draft) => {
			// Remove the ticket from the column it started in
			const start = draft[src.droppableId].tickets;
			start.splice(src.index, 1);

			// Add the ticket to the column it is ending in
			const end = draft[dst.droppableId].tickets;
			end.splice(dst.index, 0, ticket);
		});
	};
	const ReorderTickets = (src, dst, ticket) => {
		setColumns((draft) => {
			// Get the list of tickets on this column
			const tickets = draft[src.droppableId].tickets;

			// Insert the ticket into the column's ticket list
			tickets.splice(src.index, 1);
			tickets.splice(dst.index, 0, ticket);
		});
	};

	const onDragEnd = (result) => {
		const { destination, source, draggableId, type } = result;

		// No need to update state if nothing changes
		if (!destination) return;
		if (didNotMove(source, destination)) return;

		// Handle column reorder
		if (type === 'column') {
			return ReorderColumns(source.index, destination.index, draggableId);
		}

		// Handle staying in the same column
		if (isSameColumn(source, destination)) {
			return ReorderTickets(source, destination, draggableId);
		}

		// Handle ticket moving columns
		return MoveTicket(source, destination, draggableId);
	};

	return (
		<DragDropContext
			// onDragStart
			// onDragUpdate
			onDragEnd={onDragEnd}
		>
			<div className="container">
				<Droppable
					droppableId="all-columns"
					direction="horizontal"
					type="column"
				>
					{(provided) => (
						<div
							className="board"
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{order.map((cid, index) => {
								const column = {
									...columns[cid],
									tickets: columns[cid].tickets.map((tid) => ({
										...tickets[tid],
									})),
								};
								return (
									<Column
										key={cid}
										column={column}
										index={index}
										renameColumn={RenameColumn}
										deleteColumn={DeleteColumn}
									/>
								);
							})}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</div>
		</DragDropContext>
	);
};

export default Board;

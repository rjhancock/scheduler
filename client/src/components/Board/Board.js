import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import initialData from '../../initial-data';
import Column from '../Column/Column';

import './Board.css';

const Board = () => {
	const [state, setState] = useState(initialData);

	const isSameLocation = (src, dst) =>
		dst.droppableId === src.droppableId && dst.index === src.index;

	const dropSame = (src, dst, ticket) => {
		const column = state.columns[src.droppableId];

		const newTicketIds = Array.from(column.ticketIds);
		newTicketIds.splice(src.index, 1);
		newTicketIds.splice(dst.index, 0, ticket);

		const newColumn = {
			...column,
			ticketIds: newTicketIds,
		};

		const newState = {
			...state,
			columns: {
				...state.columns,
				[newColumn.id]: newColumn,
			},
		};

		setState(newState);
	};

	const onDragEnd = (result) => {
		const { destination, source, draggableId, type } = result;

		// No need to update state if nothing changes
		if (!destination) return;
		if (isSameLocation(source, destination)) return;

		if (type === 'column') {
			const newColumnOrder = Array.from(state.columnOrder);
			newColumnOrder.splice(source.index, 1);
			newColumnOrder.splice(destination.index, 0, draggableId);

			const newState = {
				...state,
				columnOrder: newColumnOrder,
			};

			setState(newState);
			return;
		}

		const home = state.columns[source.droppableId];
		const foreign = state.columns[destination.droppableId];

		// Handle staying in the same column
		if (home === foreign) return dropSame(source, destination, draggableId);

		// Handle moving columns
		const startTaskIds = Array.from(home.ticketIds);
		startTaskIds.splice(source.index, 1);
		const newStart = {
			...home,
			ticketIds: startTaskIds,
		};

		const finishTaskIds = Array.from(foreign.ticketIds);
		finishTaskIds.splice(destination.index, 0, draggableId);
		const newFinish = {
			...foreign,
			ticketIds: finishTaskIds,
		};

		const newState = {
			...state,
			columns: {
				...state.columns,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish,
			},
		};

		setState(newState);
	};

	return (
		<DragDropContext
			// onDragStart
			// onDragUpdate
			onDragEnd={onDragEnd}
		>
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
						{state.columnOrder.map((cid, index) => {
							const column = state.columns[cid];
							const tickets = column.ticketIds.map(
								(tid) => state.tickets[tid]
							);

							return (
								<Column
									key={column.id}
									column={column}
									tickets={tickets}
									index={index}
								/>
							);
						})}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default Board;

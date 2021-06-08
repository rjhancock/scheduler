import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';

import { RENAME } from '../../features/title/titleSlice';
import {
	MOVE_TICKET,
	// RENAME_COLUMN,
	REORDER_COLUMNS,
	REORDER_TICKETS,
} from '../../features/columns/columnsSlice';

import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import Column from '../Column/Column';
import ActionList from '../ActionList/ActionList';

import './Board.css';

const Board = () => {
	const title = useSelector((state) => state.title);
	const columns = useSelector((state) => state.columns);

	const dispatch = useDispatch();

	const isSameColumn = (src, dst) => src.droppableId === dst.droppableId;

	const didNotMove = (src, dst) =>
		isSameColumn(src, dst) && src.index === dst.index;

	const onDragEnd = (result) => {
		const { destination, source, draggableId, type } = result;

		// No need to update state if nothing changes
		if (!destination) return;
		if (didNotMove(source, destination)) return;

		// Handle column reorder
		if (type === 'column') {
			return dispatch(
				REORDER_COLUMNS({
					source: source.index,
					destination: destination.index,
					column: draggableId,
				})
			);
		}

		// Handle staying in the same column
		if (isSameColumn(source, destination)) {
			return dispatch(
				REORDER_TICKETS({
					source,
					destination,
					ticket: draggableId,
				})
			);
		}

		// Handle ticket moving columns
		return dispatch(
			MOVE_TICKET({
				source,
				destination,
				ticket: draggableId,
			})
		);
	};

	const addColumn = () => {};

	return (
		<DragDropContext
			// onDragStart
			// onDragUpdate
			onDragEnd={onDragEnd}
		>
			<div className="container">
				<h2>{title}</h2>
				<ActionList>
					<IconButton
						aria-label="edit"
						onClick={() => dispatch(RENAME('Renamed Projects'))}
					>
						<EditIcon />
					</IconButton>
					<IconButton aria-label="add" onClick={() => addColumn()}>
						<AddIcon />
					</IconButton>
				</ActionList>
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
							{columns.order.map((cid, index) => {
								const column = columns[cid];

								return (
									<Column
										key={cid}
										id={cid}
										column={column}
										index={index}
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

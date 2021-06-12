import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import Ticket from '../Ticket';
import ActionList from '../ActionList';

import { DELETE_COLUMN } from '../../features/columns/columnsSlice';

import './Column.css';

const Column = ({ id, column, index }) => {
	const tickets = useSelector((state) => state.tickets);
	const dispatch = useDispatch();

	return (
		<Draggable draggableId={id} index={index}>
			{(provided) => (
				<div
					className="col"
					{...provided.draggableProps}
					ref={provided.innerRef}
				>
					<h3 {...provided.dragHandleProps}>{column.title}</h3>
					<ActionList>
						<IconButton
							aria-label="delete"
							onClick={() => dispatch(DELETE_COLUMN({ cid: id }))}
						>
							<DeleteIcon />
						</IconButton>
					</ActionList>
					<Droppable droppableId={id} type="ticket">
						{(provided, snapshot) => (
							<div
								className={`ticket-list${
									snapshot.draggingOverWith ? ' drop' : ''
								}`}
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{column.ticketIds.map((tid, index) => {
									const ticket = tickets[tid];

									return (
										<Ticket
											key={tid}
											id={tid}
											ticket={ticket}
											index={index}
										/>
									);
								})}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</div>
			)}
		</Draggable>
	);
};

export default Column;

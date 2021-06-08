import { Draggable, Droppable } from 'react-beautiful-dnd';

import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import Ticket from '../Ticket/Ticket';
import ActionList from '../ActionList/ActionList';

import './Column.css';

const Column = ({ column, tickets, index }) => {
	return (
		<Draggable draggableId={column.id} index={index}>
			{(provided) => (
				<div
					className="col"
					{...provided.draggableProps}
					ref={provided.innerRef}
				>
					<h3 {...provided.dragHandleProps}>{column.title}</h3>
					<ActionList>
						<IconButton className="test" aria-label="edit">
							<EditIcon />
						</IconButton>
						<IconButton aria-label="delete">
							<DeleteIcon />
						</IconButton>
						<IconButton aria-label="add">
							<AddIcon />
						</IconButton>
					</ActionList>
					<Droppable droppableId={column.id} type="ticket">
						{(provided, snapshot) => (
							<div
								className={`ticket-list${
									snapshot.draggingOverWith ? ' drop' : ''
								}`}
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{tickets.map((ticket, index) => (
									<Ticket
										key={ticket.id}
										ticket={ticket}
										index={index}
									/>
								))}
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

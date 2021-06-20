import { Draggable, Droppable } from 'react-beautiful-dnd';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import Ticket from '../Ticket';
import ActionList from '../ActionList';

import './Column.css';

const Column = ({ column, index, DeleteColumn }) => {
	console.log({ cid: column.id, index });
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
						<IconButton
							aria-label="delete"
							onClick={() => DeleteColumn(column.id)}
						>
							<DeleteIcon />
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
								{column.tickets.map((ticket, index) => {
									return (
										<Ticket
											key={ticket.id}
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

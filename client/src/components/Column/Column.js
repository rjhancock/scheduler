import { Draggable, Droppable } from 'react-beautiful-dnd';

import Ticket from '../Ticket/Ticket';

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

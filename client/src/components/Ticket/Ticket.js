
import { Draggable } from 'react-beautiful-dnd';

import './Ticket.css'

const Ticket = ({ticket, index}) => {
	return (
		<Draggable draggableId={ticket.id} index={index}>
			{(provided) => (
				<div className="ticket"
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					{ticket.content}
				</div>
			)}
		</Draggable>
	);
}

export default Ticket;

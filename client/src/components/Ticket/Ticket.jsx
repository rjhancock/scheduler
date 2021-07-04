import { Draggable } from 'react-beautiful-dnd';

import './Ticket.css';

const Ticket = ({ ticket, index }) => {
	return (
		<Draggable
			draggableId={ticket.id}
			index={index}
			// isDragDisabled={true} // Prevents this draggable from being dragged
		>
			{(provided, snapshot) => (
				<div
					className={`ticket${snapshot.isDragging ? ' drag' : ''}`}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					{ticket.content}
				</div>
			)}
		</Draggable>
	);
};

export default Ticket;

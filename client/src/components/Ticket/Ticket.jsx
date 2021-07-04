import { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { Context } from '../../context/Context';

import './Ticket.css';

const Ticket = ({ ticket, index, draggable }) => {
	const { user } = useContext(Context);

	return (
		<Draggable
			draggableId={ticket.id}
			index={index}
			isDragDisabled={!draggable}
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

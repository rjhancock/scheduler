
import { useDrag, useDrop } from 'react-dnd';

import { ItemTypes } from '../ItemTypes.js';

const Ticket = ({ data, moveTicket, findTicket }) => {
	const originalIndex = findTicket(data.id).index;

	const [{ isDragging }, drag] = useDrag(
		() => ({
			type: ItemTypes.TICKET,
			item: { id: data.id, originalIndex },
			collect: (monitor) => ({
				isDragging: monitor.isDragging()
			}),
			end: (item, monitor) => {
				const { id: droppedId, originalIndex } = item;
				const didDrop = monitor.didDrop();
				if (!didDrop) {
					moveTicket(droppedId, originalIndex);
				}
			},
		}),
		[data.id, originalIndex, moveTicket]
	);

	const [, drop] = useDrop(
		() => ({
			accept: ItemTypes.TICKET,
			canDrop: () => false,
			hover({ id: draggedId }) {
				if (draggedId !== data.id) {
					const overIndex = findTicket(data.id).index;
					moveTicket(draggedId, overIndex);
				}
			},
		}),
		[findTicket, moveTicket]
	);

	const opacity = isDragging ? 0.5 : 1;
	return (
		<div
			id={data.id}
			ref={(node) => drag(drop(node))}
			style={{
				border: '1px dashed gray',
				padding: '0.5rem 1rem',
				marginBottom: '.5rem',
				color: 'white',
				backgroundColor: data.color,
				cursor: 'move',
				opacity,
			}}
		>
			{data.id}
		</div>
	);
}

export default Ticket;

import { useState } from 'react';
import { useDrop } from 'react-dnd';

import Ticket from './Ticket.js';
import { ItemTypes } from '../ItemTypes.js';

const Board = () => {
	const [tickets, setTickets] = useState([
		{
			id: "Box-1",
			order: 1,
			color: "red",
			style: {}
		},
		{
			id: "Box-2",
			order: 2,
			color: "green",
			style: {}
		},
		{
			id: "Box-3",
			order: 3,
			color: "blue",
			style: {}
		}
	]);

	const findTicket = (id) => {
		const ticket = tickets.find((t) => t.id === id);
		return {
			ticket,
			index: tickets.indexOf(ticket),
		};
	}

	const moveTicket = (id, dropIndex) => {
		const index = findTicket(id).index;
		const newTickets = tickets.slice();

		// Cut out the moving ticket, then paste it in the drop index
		newTickets.splice(dropIndex, 0, ...newTickets.splice(index, 1));

		setTickets(newTickets);
	}

	const [, drop] = useDrop(() => ({ accept: ItemTypes.TICKET, }));

	return (
		<div ref={drop} style={{ width: 400, }}>
			{tickets.map((ticket) => {
				return <Ticket data={ticket} moveTicket={moveTicket} findTicket={findTicket} />
			})}
		</div>
	)
}

export default Board

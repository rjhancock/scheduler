import { Droppable } from "react-beautiful-dnd";

import Ticket from "../Ticket/Ticket";

import "./Column.css";

const Column = ({ column, tickets }) => {
	return (
		<div className="col">
			<h3>{column.title}</h3>
			<Droppable droppableId={column.id}>
				{(provided, snapshot) => (
					<div
						className={`ticket-list${
							snapshot.draggingOverWith ? " drop" : ""
						}`}
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						{tickets.map((ticket, index) => (
							<Ticket key={ticket.id} ticket={ticket} index={index} />
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	);
};

export default Column;

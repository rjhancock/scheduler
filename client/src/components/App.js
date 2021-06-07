import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import initialData from "../initial-data";
import Column from "./Column/Column";

import "./App.css";

const App = () => {
	const [state, setState] = useState(initialData);

	const isSameLocation = (src, dst) =>
		dst.droppableId === src.droppableId && dst.index === src.index;

	const dropSame = (src, dst, ticket) => {
		const column = state.columns[src.droppableId];

		const newTicketIds = Array.from(column.ticketIds);
		newTicketIds.splice(src.index, 1);
		newTicketIds.splice(dst.index, 0, ticket);

		const newColumn = {
			...column,
			ticketIds: newTicketIds,
		};

		const newState = {
			...state,
			columns: {
				...state.columns,
				[newColumn.id]: newColumn,
			},
		};

		setState(newState);
	};

	const onDragEnd = (result) => {
		const { destination, source, draggableId } = result;

		// No need to update state if nothing changes
		if (!destination) return;
		if (isSameLocation(source, destination)) return;

		const start = state.columns[source.droppableId];
		const finish = state.columns[destination.droppableId];

		if (start === finish) return dropSame(source, destination, draggableId);

		const startTaskIds = Array.from(start.ticketIds);
		startTaskIds.splice(source.index, 1);
		const newStart = {
			...start,
			ticketIds: startTaskIds,
		};

		const finishTaskIds = Array.from(finish.ticketIds);
		finishTaskIds.splice(destination.index, 0, draggableId);
		const newFinish = {
			...finish,
			ticketIds: finishTaskIds,
		};

		const newState = {
			...state,
			columns: {
				...state.columns,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish,
			},
		};

		setState(newState);
	};

	return (
		<DragDropContext
			// onDragStart
			// onDragUpdate
			onDragEnd={onDragEnd}
		>
			<div className="board">
				{state.columnOrder.map((cid) => {
					const column = state.columns[cid];
					const tickets = column.ticketIds.map(
						(tid) => state.tickets[tid]
					);

					return (
						<Column key={column.id} column={column} tickets={tickets} />
					);
				})}
			</div>
		</DragDropContext>
	);
};

export default App;

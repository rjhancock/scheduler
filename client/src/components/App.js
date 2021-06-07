
import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import initialData from '../initial-data';
import Column from './Column/Column';

import './App.css';

const App = () => {
	const [state, setState] = useState(initialData);

	const sameDrop = (source, destination) => {
		return (destination.droppableId === source.droppableId
			  && destination.index === source.index);
	}

	const onDragEnd = result => {
		const {destination, source, draggableId} = result;

		// No need to update state if nothing changes
		if (!destination) return;
		if (sameDrop(source, destination)) return;

		const column = state.columns[source.droppableId];

		const newTicketIds = Array.from(column.ticketIds);
		newTicketIds.splice(source.index, 1);
		newTicketIds.splice(destination.index, 0, draggableId);

		const newColumn = {
			...column,
			ticketIds: newTicketIds,
		}

		const newState = {
			...state,
			columns: {
				...state.columns,
				[newColumn.id]: newColumn,
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
				{
					state.columnOrder.map((cid) => {
						const column = state.columns[cid];
						const tickets = column.ticketIds.map(tid => state.tickets[tid]);

						return (
							<Column
								key={column.id}
								column={column}
								tickets={tickets}
							/>
						);
					})
				}
			</div>
		</DragDropContext>
	);
}

export default App;

import { createSlice } from '@reduxjs/toolkit';

export const columnsSlice = createSlice({
	name: 'columns',
	initialState: {
		order: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'],
		c1: {
			title: 'Backlog',
			ticketIds: ['t1', 't2', 't3', 't4'],
		},
		c2: {
			title: 'Drafting',
			ticketIds: [],
		},
		c3: {
			title: 'Linework',
			ticketIds: [],
		},
		c4: {
			title: 'Shading',
			ticketIds: [],
		},
		c5: {
			title: 'Done',
			ticketIds: [],
		},
		c6: {
			title: 'Archived',
			ticketIds: [],
		},
	},
	reducers: {
		MOVE_TICKET: (state, action) => {
			const { source, destination, ticket } = action.payload;

			const start = state[source.droppableId].ticketIds;
			start.splice(source.index, 1);

			const end = state[destination.droppableId].ticketIds;
			end.splice(destination.index, 0, ticket);

			return state;
		},
		REORDER_TICKETS: (state, action) => {
			const { source, destination, ticket } = action.payload;
			const ticketIds = state[source.droppableId].ticketIds;

			ticketIds.splice(source.index, 1);
			ticketIds.splice(destination.index, 0, ticket);
			return state;
		},
		RENAME_COLUMN: (state, action) => {},
		REORDER_COLUMNS: (state, action) => {
			const { source, destination, column } = action.payload;
			state.order.splice(source, 1);
			state.order.splice(destination, 0, column);
			return state;
		},
	},
});

export const { MOVE_TICKET, RENAME_COLUMN, REORDER_COLUMNS, REORDER_TICKETS } =
	columnsSlice.actions;

export default columnsSlice.reducer;

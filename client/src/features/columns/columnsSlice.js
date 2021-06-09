import { createSlice } from '@reduxjs/toolkit';

export const columnsSlice = createSlice({
	name: 'columns',
	initialState: {
		cid: 6,
		order: ['c0', 'c1', 'c2', 'c3', 'c4', 'c5'],
		c0: {
			title: 'Backlog',
			ticketIds: ['t0', 't1', 't2', 't3'],
		},
		c1: {
			title: 'Drafting',
			ticketIds: [],
		},
		c2: {
			title: 'Line Work',
			ticketIds: [],
		},
		c3: {
			title: 'Shading',
			ticketIds: [],
		},
		c4: {
			title: 'Done',
			ticketIds: [],
		},
		c5: {
			title: 'Archived',
			ticketIds: [],
		},
	},
	reducers: {
		ADD_COLUMN: (state) => {
			const newId = `c${state.cid++}`;
			state.order.push(newId);

			state[newId] = {
				title: 'New Column',
				ticketIds: [],
			};

			return state;
		},
		RENAME_COLUMN: (state, action) => {},
		REORDER_COLUMNS: (state, action) => {
			const { source, destination, column } = action.payload;
			state.order.splice(source, 1);
			state.order.splice(destination, 0, column);
			return state;
		},
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
	},
});

export const {
	ADD_COLUMN,
	RENAME_COLUMN,
	REORDER_COLUMNS,
	MOVE_TICKET,
	REORDER_TICKETS,
} = columnsSlice.actions;

export default columnsSlice.reducer;

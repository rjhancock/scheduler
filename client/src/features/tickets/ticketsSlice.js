import { createSlice } from '@reduxjs/toolkit';

export const ticketsSlice = createSlice({
	name: 'tickets',
	initialState: {
		t1: { id: 't1', content: 'Take out the garbage' },
		t2: { id: 't2', content: 'Watch my favorite show' },
		t3: { id: 't3', content: 'Charge my phone' },
		t4: { id: 't4', content: 'Cook dinner' },
	},
	reducers: {
		UPDATE_TICKET: (state, action) => state,
	},
});

export const { UPDATE_TICKET } = ticketsSlice.actions;

export default ticketsSlice.reducer;

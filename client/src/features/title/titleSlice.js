import { createSlice } from '@reduxjs/toolkit';

export const titleSlice = createSlice({
	name: 'title',
	initialState: 'My Projects',
	reducers: {
		RENAME: (state, action) => (state = action.payload),
	},
});

export const { RENAME } = titleSlice.actions;

export default titleSlice.reducer;

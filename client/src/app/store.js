import { configureStore } from '@reduxjs/toolkit';

import titleSlice from '../features/title/titleSlice';
import columnsSlice from '../features/columns/columnsSlice';
import ticketsSlice from '../features/tickets/ticketsSlice';

import preloadedState from '../initial-data';

export default configureStore({
	reducer: {
		title: titleSlice,
		columns: columnsSlice,
		tickets: ticketsSlice,
	},
	preloadedState,
});

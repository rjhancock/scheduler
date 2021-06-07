const initialData = {
	tickets: {
		'ticket-1': { id: 'ticket-1', content: 'Take out the garbage' },
		'ticket-2': { id: 'ticket-2', content: 'Watch my favorite show' },
		'ticket-3': { id: 'ticket-3', content: 'Charge my phone' },
		'ticket-4': { id: 'ticket-4', content: 'Cook dinner' },
	},
	columns: {
		'column-1': {
			id: 'column-1',
			title: 'To do',
			ticketIds: ['ticket-1', 'ticket-2', 'ticket-3', 'ticket-4'],
		},
		'column-2': {
			id: 'column-2',
			title: 'Done did',
			ticketIds: [],
		},
		'column-3': {
			id: 'column-3',
			title: 'Linework',
			ticketIds: [],
		},
		'column-4': {
			id: 'column-4',
			title: 'Shading',
			ticketIds: [],
		},
	},
	// Facilitate reordering of the columns
	columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};

export default initialData;

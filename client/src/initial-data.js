const initialData = {
	tickets: {
		t0: { content: 'Take out the garbage' },
		t1: { content: 'Watch my favorite show' },
		t2: { content: 'Charge my phone' },
		t3: { content: 'Cook dinner' },
	},
	columns: {
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
			title: 'Linework',
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
	title: 'My Projects',
};

export default initialData;

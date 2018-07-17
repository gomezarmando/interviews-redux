const interviews = (state = [], action) => {
	console.log('action type:', action)
	switch (action.type) {
		case 'ADD_INTERVIEW':
			console.log('add interview');
			return [
				...state,
				{
					id: action.id,
					date: new Date(),
					note: action.note,
					contacts: action.contacts
				}
			];
		case 'DELETE_INTERVIEW':
			console.log('delete interview');
			return [
				...state
			];
		case 'UPDATE_INTERVIEW':
			console.log('update interview');
			return [
				...state
			]
		default: 
			return state;
	}
}

export default interviews;
const interviews = (state = [], action) => {
	switch (action.type) {
		case 'ADD_INTERVIEW':
			return [
				...state,
				{
					id: action.id,
					date: new Date(),
					note: action.note,
					contacts: action.contacts
				}
			];
		default: 
			return state;
	}
}

export default interviews;
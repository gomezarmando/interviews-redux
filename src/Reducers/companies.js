const companies = (state = [], action) => {
	switch (action.type) {
		case 'ADD_COMPANY':
			console.log('triggered copmany');
			return [
				...state,
				{
					id: action.id,
					company: action.company,
					date: action.date,
					location: action.location,
					recruiter: action.recruiter,
					rounds: []
				}
			];
		default: 
			return state;
	}
}

export default companies;
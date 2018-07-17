import interviews from './interviews';

const companies = (state = [], action) => {
	switch (action.type) {
		case 'ADD_COMPANY':
			console.log('triggered copmany', [state, action]);
			return [
				...state,
				{
					id: action.id,
					company: action.company,
					date: action.date,
					location: action.location,
					recruiter: action.recruiter,
					rounds: interviews([], action)
				}
			];
		default: 
			return state;
	}
}

export default companies;
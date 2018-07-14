export const add_company = (company, location, recruiter) => ({
	type: 'ADD_COMPANY',
	id: new Date(),
	company,
	date: new Date(),
	location,
	recruiter,
	rounds: []
})

export const add_interview = (id, note) => ({
	type: 'ADD_INTERVIEW',
	id,
	note: note,
	contacts: []
});
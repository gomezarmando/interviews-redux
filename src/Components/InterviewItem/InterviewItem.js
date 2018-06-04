import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class InterviewItem extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			company: props.details.company,
			date: props.details.date,
			dirty: false,
			location: props.details.location,
			recruiter: props.details.recruiter,
			rounds: props.details.rounds
		}
	}

	componentWillReceiveProps (nProps) {
		this.setState({
			company: nProps.details.company,
			date: nProps.details.date,
			dirty: nProps.details.dirty,
			location: nProps.details.location,
			recruiter: nProps.details.recruiter,
			rounds: nProps.details.rounds
		})
	}
	addRound = event => {
		const {rounds} = this.state;
		const newStateObj = Object.assign({}, this.state);

		console.log('adding round', event);

		newStateObj.rounds.push({
			id: rounds.length + 1
		});
		newStateObj.dirty = true;

		this.setState(newStateObj);
	}

	deleteRound = index => {
		const {rounds} = this.state;
		// const updatedRounds = [...rounds.splice(index, 1)];

		rounds.splice(index, 1)
		console.log('Deleting round', index);

		this.setState({
			rounds
		});
	}

	handleInputChange = event => {
		const {index, onUpdate} = this.props;
		const {target} = event;
		const {value, name} = target;
		const newStateObj = Object.assign({}, this.state)

		newStateObj[name] = value;
		newStateObj.dirty = true;

		if (onUpdate) {
			onUpdate(index, newStateObj);
		};
		// this.setState(newStateObj);
	}

	handleInterviewRoundChange = event => {

	}

	handleInterviewUpdate = event => {
		console.log('');
	}

	handleInterviewSave = event => {
		const {onUpdate} = this.props;
		
		if(onUpdate) {
			onUpdate();
		}
	}

	handleInterviewDelete = event => {
		console.log('Handle Low level delete');
		const {index, onDelete} = this.props;

		if(onDelete && index >= 0) {
			onDelete(index);
		}
	}

	render () {
		const {company, date, dirty, location, recruiter, rounds} = this.state;

		return (
			<div className='interview-list-item-component'>
				<Button
					onClick={this.addRound}>
					Add Round +
				</Button>
				<Button
					color={'primary'}
					onClick={this.handleInterviewSave}
					disabled={!dirty} >
					Save
				</Button>
				<Button
					onClick={this.handleInterviewDelete}>
					Delete
				</Button>
				<TextField
					fullWidth
					id='Company'
					label='Company'
					name='company'
					placeholder='Company'
					onChange={this.handleInputChange}
					value={company} />
				{/* <TextField
					fullWidth
					id='Date'
					label='Date'
					name='date'
					placeholder='Date'
					onChange={this.handleInputChange}
					value={date} /> */}
				<span>{moment(date).format('dddd, MMMM Do YYYY, h:mm a')}</span>
				<TextField
					fullWidth
					id='Location'
					label='Location'
					name='location'
					placeholder='Location'
					onChange={this.handleInputChange}
					value={location} />
				<TextField
					fullWidth
					id='Recruiter'
					label='Recruiter'
					name='recruiter'
					placeholder='Recruiter'
					onChange={this.handleInputChange}
					value={recruiter} />
				<div className='interview-list-item-rounds'>
					{
						(rounds && rounds.length) && rounds.map((round, index) => (
							<div
								className='interview-list-item-rounds-item'
								key={`interview-list-item-rounds-item-${index}`}>
								<span>
									round {round.id}
								</span>
								<div className='interview-list-item-round-details'>
									<TextField
										fullWidth
										label='Description'
										name='description'
										placeholder='Enter Interview details'
										onChange={this.handleInterviewRoundChange}
										value={round.note} />
								</div>
								<Button
									onClick={event => {
										this.deleteRound(index)
									}}>
									Delete Round
								</Button>
							</div>
						)) 
					}
				</div>
			</div>
		);
	};
};

InterviewItem.propTypes = {
	details: PropTypes.object,
	onDelete: PropTypes.func,
	onUpdate: PropTypes.func
};
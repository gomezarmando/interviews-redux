import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

import moment from 'moment';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export const InterviewItem = (props) => {
	
	// // Classes
	// getClasses = additionalClasses => {
	// 	const {dirty} = this.state;

	// 	return classnames(
	// 		'interview-list-item-component',
	// 		{
	// 			dirty: dirty
	// 		},
	// 		additionalClasses
	// 	);
	// }

	// Rounds
	// addRound = event => {
	// 	const {index, onUpdate} = this.props;
	// 	const newStateObj = Object.assign({}, this.state);

	// 	newStateObj.rounds.push({
	// 		id: newStateObj.rounds.length + 1,
	// 		date: new Date(),
	// 		note: '',
	// 		contacts: []
	// 	});
	// 	newStateObj.dirty = true;

	// 	if (onUpdate) {
	// 		onUpdate(index, newStateObj)
	// 	}
	// }

	// deleteRound = roundIndex => {
	// 	const {index, onUpdate} = this.props;
	// 	const newStateObj = Object.assign({}, this.state);

	// 	newStateObj.rounds.splice(roundIndex, 1);
	// 	newStateObj.dirty = true;

	// 	if (onUpdate) {
	// 		onUpdate(index, newStateObj);
	// 	}
	// }

	// handleInterviewRoundChange = (roundIndex, property, value) => {
	// 	const {index, onUpdate} = this.props;
	// 	const newStateObj = Object.assign({}, this.state);

	// 	newStateObj.rounds[roundIndex][property] = value;
	// 	newStateObj.dirty = true;

	// 	if (onUpdate) {
	// 		onUpdate(index, newStateObj);
	// 	}
	// }

	// // Interactivity
	// handleInputChange = event => {
	// 	const {index, onUpdate} = this.props;
	// 	const {target} = event;
	// 	const {value, name} = target;
	// 	const newStateObj = Object.assign({}, this.state)

	// 	newStateObj[name] = value;
	// 	newStateObj.dirty = true;

	// 	if (onUpdate) {
	// 		onUpdate(index, newStateObj);
	// 	};
	// }


	// // Interview Methods
	// handleInterviewDelete = event => {
	// 	console.log('Handle Low level delete');
	// 	const {index, onDelete} = this.props;

	// 	if(onDelete && index >= 0) {
	// 		onDelete(index);
	// 	}
	// }

	// return () 
	// 	const {className} = this.props;
	// 	const {company, date, dirty, location, recruiter, rounds} = this.state;

		return (
			<Fragment>
				<div className={this.getClasses(className)}>
					<div className='interview-list-item-component-actions'>
						<Button
							className='add-round'
							onClick={this.addRound}>
							Add Round +
						</Button>
						<Button
							className='delete-interview'
							onClick={this.handleInterviewDelete}>
							Delete
						</Button>				
					</div>
					<div className='interview-list-item-component-data'>
						<Grid container spacing={8}>
							<Grid item xs={12}>
								<Grid container >
									<Grid item sm={4} xs={4} lg={4}>
										<TextField
											id='Company'
											fullWidth
											name='company'
											placeholder='Company'
											onChange={this.handleInputChange}
											value={company} />
									</Grid>
									<Grid item sm={4} xs={4} lg={4}>
										<TextField
											id='Location'
											fullWidth
											name='location'
											placeholder='Location'
											onChange={this.handleInputChange}
											value={location} />	
									</Grid>
									<Grid item sm={4} xs={4} lg={4}>
										<TextField
											id='Recruiter'
											fullWidth
											name='recruiter'
											placeholder='Recruiter'
											onChange={this.handleInputChange}
											value={recruiter} />
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</div>
					<div className='interview-list-item-rounds'>
						{
							(rounds && rounds.length > 0) &&
							<p>Interviews</p>
						}
						{
							(rounds && rounds.length > 0) && rounds.map((round, index) => (
								<div
									className='interview-list-item-rounds-item'
									key={`interview-list-item-rounds-item-${index}`}>
									<div className='interview-list-item-round-actions'>
										<Button
											onClick={event => {
												this.deleteRound(index)
											}}>
											Delete
										</Button>
									</div>
									<div className='interview-list-item-round-date'>{moment(round.date).format('dddd - M/D/YY - h:mm a')}</div>
									<div className='interview-list-item-round-details'>
										<TextField
											fullWidth
											name='note'
											multiline
											placeholder='Enter Interview details'
											onChange={event => {
												const {target} = event;
												const {value} = target
												this.handleInterviewRoundChange(index, 'note', value);
											}}
											value={round.note} />
									</div>
								</div>
							)) 
						}
					</div>
				</div>
			</Fragment>
		);
	// };
};

InterviewItem.propTypes = {
	details: PropTypes.object,
	onDelete: PropTypes.func,
	onUpdate: PropTypes.func
};
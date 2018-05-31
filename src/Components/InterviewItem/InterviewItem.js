import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

export default class InterviewItem extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			company: props.details.name
		}
	}

	handleInputChange = event => {
		console.log('Handle input change');
	}

	render () {
		const {company} = this.state;

		return (
			<div className='interview-list-item-component'>
				<TextField
					fullWidth
					id='Company'
					label='Company'
					onChange={this.handleInputChange}
					value={company} />
			</div>
		);
	};
};

InterviewItem.propTypes = {
	details: PropTypes.object
};
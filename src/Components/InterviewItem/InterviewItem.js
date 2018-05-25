import React from 'react';
import PropTypes from 'prop-types';

const InterviewItem = props => {
	const {details} = props;

	return (
		<div>
			<span>Name: {details.name}</span>
		</div>
	);
};

InterviewItem.propTypes = {
	details: PropTypes.object
}

export default InterviewItem;
import React from 'react';
import PropTypes from 'prop-types';

import InterviewItem from '../InterviewItem/InterviewItem';

const InterviewList = props => {

	const {items} = props;
	
	return (
		<div
			className='interview-list'>
			{
				(items && items.length) ? items.map((item, index) => (
					<InterviewItem details={item} />
				)) : <span>You have no Interviews saved</span>
			}
		</div>
	);
};

InterviewList.propTypes = {
	items: PropTypes.array
}
export default InterviewList;

import React from 'react';
import PropTypes from 'prop-types';
import InterviewItem from '../InterviewItem/InterviewItem';

const InterviewList = props => {
	const {items, onAdd, onDelete, onUpdate} = props;
	
	return (
		<div className='interview-list-component'>
			<div
				className='interview-list'>
				{
					(items && items.length) ? items.map((item, index) => (
						<InterviewItem
							details={item}
							index={index}
							key={`interview-list-item-${index}`}
							onDelete={onDelete}
							onUpdate={onUpdate} />
					)) : <span>You have no Interviews saved</span>
				}
			</div>
		</div>
	);
};

InterviewList.propTypes = {
	items: PropTypes.array,
	onDelete: PropTypes.func,
	onUpdate: PropTypes.func
}
export default InterviewList;

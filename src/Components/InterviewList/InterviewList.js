import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import InterviewItem from '../InterviewItem/InterviewItem';

const InterviewList = props => {
	const {items, onAdd, onDelete, onUpdate} = props;
	const handleAdd = function () {
		if(onAdd){
			// console.log('Low level Add method');
			onAdd()
		}
	}
	
	return (
		<div className='interview-list-component'>
			<div className='interview-list-controls'>
				<Button
					color='primary'
					disableRipple
					onClick={handleAdd}
					variant='outlined'>Add Company +</Button>
			</div>
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
	onAdd: PropTypes.func,
	onDelete: PropTypes.func,
	onUpdate: PropTypes.func
}
export default InterviewList;

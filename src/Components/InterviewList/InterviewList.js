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
	const handleDelete = function () {
		if(onDelete){
			// console.log('Low level Delete method');
			onDelete()
		}
	}
	const handleUpdate = function () {
		if(onUpdate){
			// console.log('Low level Update method');
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
					variant='outlined'>Add +</Button>
				<Button
					disableRipple
					onClick={handleDelete}
					variant='outlined'>Delete -</Button>
			</div>
			<div
				className='interview-list'>
				{
					(items && items.length) ? items.map((item, index) => (
						<InterviewItem
							details={item}
							key={`interview-list-item-${index}`} />
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

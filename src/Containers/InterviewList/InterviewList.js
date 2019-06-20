import React from 'react';
import {connect} from 'react-redux';
import {add_interview, delete_interview, update_interview} from '../../Actions';
import PropTypes from 'prop-types';

import InterviewItem from '../../Components/InterviewItem/InterviewItem';

const InterviewList = (props) => {
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
							onAdd={() => onAdd()}
							onDelete={() => onDelete(item.id)}
							onUpdate={() => onUpdate(item.id, item.note)} />
					)) : <span>You have no Interviews saved</span>
				}
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	items: state
});

const mapDispatchToProps = dispatch => {
	return {
		onAdd: () => {
			dispatch(add_interview());
		},
		onDelete: id => {
			dispatch(delete_interview(id));
		},
		onUpdate: (id, note) => {
			dispatch(update_interview(id, note))
		}
	}
}

InterviewList.propTypes = {
	items: PropTypes.array,
	onDelete: PropTypes.func,
	onUpdate: PropTypes.func
}

export default  connect(
	mapStateToProps,
	mapDispatchToProps
)(InterviewList);

import {combineReducers} from 'redux';
import companies from './companies';
import interviews from './interviews';

export default combineReducers({
	companies,
	interviews
});
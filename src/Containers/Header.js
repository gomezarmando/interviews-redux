import React from 'react';
import {connect} from 'react-redux';
import {add_company} from '../Actions';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = ({dispatch}) => {
	
	return (
		<AppBar
			className='interview-list-app-bar'
			color='secondary'
			position='sticky' >
			<Toolbar>
				<Typography
					color='default'
					variant='title'>Interviews</Typography>
				<Button
					color="inherit"
					disableRipple
					onClick={e => {
						dispatch(add_company({
							company: 'test copmany',
							location: 'chicagos',
							recruiter: 'lisa the recruiter'
						}))
					}}
					variant='outlined'>Add Company +</Button>
			</Toolbar>
		</AppBar>
	)
}

export default connect()(Header)
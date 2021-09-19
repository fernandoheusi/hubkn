import React from 'react';
import logo from '../../assets/logo.png'
import { LoginButton } from '../LoginButton';

import { Container } from './styles';

export function Header(){
	return(
		<Container>
				<img src={logo} alt="Logo"/>
				<LoginButton href="#"/>
		</Container>
	)
}
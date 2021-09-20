import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/logo.png'
import { HeaderButton } from '../HeaderButton';

import { Container } from './styles';

export function Header(){
	const history = useHistory();

	function navigateToNegociosFechados(){
		history.push('/negociosfechados');
	}

	function navigateHome(){
		history.push('/');
	}
	
	return(
		<Container>
				<img src={logo} alt="Logo"/>

				<div>
				<HeaderButton onClick={navigateHome} title='Home'/>
				<HeaderButton onClick={navigateToNegociosFechados} title='Negócios Fechados'/>
				</div>
		</Container>
	)
}
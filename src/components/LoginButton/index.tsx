import React from 'react';
import person from '../../assets/person.svg';
import { Container } from './styles';

interface Props{
	href: string;
}

export function LoginButton({href}:Props){
	return(
		<Container as="a" href={href}>
			<img src={person} alt="incone login"/>
			<h1>Login</h1>
		</Container>
	)
}
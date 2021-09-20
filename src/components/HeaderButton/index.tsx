import React from 'react';
import { Container } from './styles';

interface Props extends React.HTMLProps<HTMLButtonElement>{
	href?: string;
	title: string;
	onClick:() => void;
}

export function HeaderButton({href, title, onClick}:Props){
	return(
		<Container as="a" href={href} onClick={onClick}>
			<h1>{title}</h1>
		</Container>
	)
}
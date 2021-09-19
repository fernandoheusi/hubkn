import React from 'react';
import { SellersResume } from '../ResumeSheet';
import { Container } from './styles';

interface Props{
	values: SellersResume;
	key: string;
}

export function ResumeSheetRow({values,key}:Props){
	return(
		<Container values={values}>
			<p id='name'>{values.name}</p>
			<p>{values.closedDeals}</p>
			<p>{values.total}</p>
			<p id='.meanTicket'>{values.meanTicket}</p>
		</Container>
	)
}
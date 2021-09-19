import React from 'react';
import { SellersActions } from '../Sheet';
import { Container } from './styles';

interface Props{
	values: SellersActions;
	key: string;
}

export function SheetRow({values,key}:Props){
	return(
		<Container values={values}>
			<p id='name'>{values.name}</p>
			<p>{values.calls}</p>
			<p>{values.timeOnCalls}</p>
			<p>{values.emailsSent}</p>
			<p id='meetingScheduled'>{values.meetingScheduled}</p>
		</Container>
	)
}
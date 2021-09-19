import React from 'react';
import { SheetRow } from '../SheetRow';
import { Container } from './styles';
import {useChart} from '../../contexts/chartDataContext'

export interface SellersActions{
			id: string;
			name: string;
			calls: number;
			timeOnCalls: number;
			emailsSent: number;
			meetingScheduled: number;
}

interface Props {
	data: SellersActions[];
	headerTitles: string[];
}

export function Sheet({data,headerTitles}:Props){
	const {setPerformanceChartTitle} = useChart();

	function handleSheetHeaderButton(props: 'calls' | 'timeOnCalls' |'emailsSent' | 'meetingScheduled' ){
		setPerformanceChartTitle(props);
	}
	
	return(
		<Container>
			<div id="sheet-header">
				<button disabled>Vendedor</button>
				<button onClick={() => handleSheetHeaderButton('calls')}>Ligações</button>
				<button onClick={() => handleSheetHeaderButton('timeOnCalls')}>Tempo em chamada (min)</button>
				<button onClick={() => handleSheetHeaderButton('emailsSent')}>E-mails enviados</button>
				<button onClick={() => handleSheetHeaderButton('meetingScheduled')}>Reuniões agendadas</button>
			</div>
			{data.map(item => 
				<SheetRow values={item} key={item.id}/>
			)}
		</Container>
	)
}
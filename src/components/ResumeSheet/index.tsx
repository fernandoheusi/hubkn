import React from 'react';
import { SheetRow } from '../SheetRow';
import { Container } from './styles';
import {useChart} from '../../contexts/chartDataContext'
import { ResumeSheetRow } from '../ResumeSheetRow';

export interface SellersResume{
			id: string;
			name: string;
			closedDeals: number;
			total: number;
			meanTicket: number;
}

interface Props {
	data: SellersResume[];
}

export function ResumeSheet({data}:Props){
	const {setResumeChartTitle} = useChart();

	function handleSheetHeaderButton(props: 'closedDeals' | 'total' |'meanTicket'){
		setResumeChartTitle(props);
	}
	
	return(
		<Container>
			<div id="sheet-header">
				<button disabled>Vendedor</button>
				<button onClick={() => handleSheetHeaderButton('closedDeals')}>Negócios Fechados</button>
				<button onClick={() => handleSheetHeaderButton('total')}>Valor Total</button>
				<button onClick={() => handleSheetHeaderButton('meanTicket')}>Ticket Médio</button>
			</div>
			{data.map(item => 
				<ResumeSheetRow values={item} key={item.id}/>
			)}
		</Container>
	)
}
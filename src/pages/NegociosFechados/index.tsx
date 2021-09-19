import React, { useEffect } from 'react';
import { VictoryAxis, VictoryBar, VictoryTheme } from 'victory';
import { ResumeSheet } from '../../components/ResumeSheet';
import { Sheet } from '../../components/Sheet';
import { useChart } from '../../contexts/chartDataContext';
import { Chart, Container } from './styles';

export function NegociosFechados(){
	const {resumeChartTitle,setResumeChartTitle} = useChart();
	
	const data = [
		{
			id: '1',
			name: 'Fernando',
			closedDeals: 200,
			total: 456,
			meanTicket: 23,
		},
		{
			id: '2',
			name: 'Ricardo',
			closedDeals: 280,
			total: 370,
			meanTicket: 15,
		},
		{
			id: '3',
			name: 'Flavia',
			closedDeals: 150,
			total: 315,
			meanTicket: 54,
		},
		{
			id: '4',
			name: 'Pedro',
			closedDeals: 100,
			total: 240,
			meanTicket: 22,
		}
	]
	
	const chartArray = data.map(d =>({
		x: d.name,
		y: d[resumeChartTitle]
	}));

	function selectChartTitle(){
		switch (resumeChartTitle){
			case 'closedDeals': return 'Negócios Fechados';
			case 'total': return 'Valor Total';
			case 'meanTicket': return 'Ticket Médio';
		}
	}
	
	console.log('chartData: ',resumeChartTitle);

	useEffect(() => {
		console.log("chartArray: ",chartArray);
	},[resumeChartTitle])
	
	return(
		<Container>
			<main>
						<div id='chart-div'>
							{/* <h1>{selectChartTitle()}</h1> */}
							<Chart
								domainPadding={20}
								theme={VictoryTheme.material}
							>
								<VictoryAxis 
									dependentAxis
									style={{
										tickLabels: {fontSize: 8}
									}}
								/>
								<VictoryBar
								horizontal
									style={{
										data: {
											fill: ({ datum }) => datum.y > 10 ? 'green' : 
											datum.y >= 5? "yellow": 'red',
											 
										},
										labels: {
											fontSize: '10px'
										},
									}}
									labels={({ datum }) => datum.x}
									data={chartArray}
									// data accessor for x values
									x="x"
									// data accessor for y values
									y='y'
								/>
							</Chart>
						</div>
					<ResumeSheet data={data}/>
			</main>
		</Container>
	)
}
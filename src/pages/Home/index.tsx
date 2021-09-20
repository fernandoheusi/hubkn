import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryTheme,VictoryAxis } from 'victory';
import googleIconImg from '../../assets/google-icon.svg';
import { Header } from '../../components/Header';
import { Sheet } from '../../components/Sheet';
import { ChartProvider, useChart } from '../../contexts/chartDataContext';

import { Container,Chart } from './styles';

export interface ChartProps {
	sheetHeaderTitle: string;
	// name: string;
	// calls?: number;
	// timeOnCalls?: number;
	// emailsSent?: number;
	// meetingScheduled?: number;
}

export function Home(){
	const {performanceChartTitle,setPerformanceChartTitle} = useChart();
	const headerTitles = ['calls','timeOnCalls','emailsSent','meetingScheduled'];
	
	const data = [
		{
			id: '1',
			name: 'Fernando',
			calls: 200,
			timeOnCalls: 456,
			emailsSent: 23,
			meetingScheduled: 12 
		},
		{
			id: '2',
			name: 'Ricardo',
			calls: 280,
			timeOnCalls: 370,
			emailsSent: 15,
			meetingScheduled: 7 
		},
		{
			id: '3',
			name: 'Flavia',
			calls: 150,
			timeOnCalls: 315,
			emailsSent: 54,
			meetingScheduled: 7 
		},
		{
			id: '4',
			name: 'Pedro',
			calls: 100,
			timeOnCalls: 240,
			emailsSent: 22,
			meetingScheduled: 4
		}
	]
	
	const chartArray = data.map(d =>({
		x: d.name,
		y: d[performanceChartTitle]
	}));

	function selectChartTitle(){
		switch (performanceChartTitle){
			case 'calls': return 'Ligações';
			case 'timeOnCalls': return 'Tempo em Chamada';
			case 'emailsSent': return 'E-mails enviados';
			case 'meetingScheduled': return 'Reuniões Agendadas';
		}
	}
	
	console.log('chartData: ',performanceChartTitle);

	useEffect(() => {
		console.log("chartArray: ",chartArray);
	},[performanceChartTitle])
	
	return (
		<Container>
					<main>
						<div id='chart-div'>
								<h1>{selectChartTitle()}</h1>
							<Chart
								domainPadding={20}
								theme={VictoryTheme.material}
								height={16*chartArray.length+90}
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
										width: 6
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
					<Sheet data={data} headerTitles={headerTitles}/>
				</main>
		</Container>
	);
}
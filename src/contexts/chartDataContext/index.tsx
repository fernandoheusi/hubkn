import React, {createContext, ReactNode, useContext, useState} from 'react';


type PerformanceChartTitle = 'calls' | 'timeOnCalls' | 'emailsSent' | 'meetingScheduled';
type ResumeChartTitle = 'closedDeals' | 'total' | 'meanTicket';

interface ChartContextTitle{
	performanceChartTitle: PerformanceChartTitle;
	setPerformanceChartTitle: (chartTitle:PerformanceChartTitle) => void;

	resumeChartTitle: ResumeChartTitle;
	setResumeChartTitle: (resumeChartTitle:ResumeChartTitle) => void;
}

interface ChartProviderProps{
	children: ReactNode;
}

const ChartContext = createContext({} as ChartContextTitle);

function ChartProvider({children}: ChartProviderProps){
	const [performanceChartTitle,setPerformanceChartTitle] = useState<PerformanceChartTitle>('meetingScheduled');
	const [resumeChartTitle,setResumeChartTitle] = useState<ResumeChartTitle>('meanTicket');
	return(
		<ChartContext.Provider value={{performanceChartTitle,setPerformanceChartTitle,resumeChartTitle,setResumeChartTitle}}>
			{children}
		</ChartContext.Provider>
	)
}

function useChart(){
	const context = useContext(ChartContext);
	return context
}

export {ChartProvider,useChart};

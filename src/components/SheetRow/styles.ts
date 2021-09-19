import styled from "styled-components";
import { SellersActions } from "../Sheet";

interface ContainerProps{
	values: SellersActions;
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	flex-direction: row;

	width: 100%;

	align-items: center;
	justify-content: space-between;

	padding: 10px;
	border-radius: 200px;
		:hover{
			background-color: rgba(4,210,167,0.1);
		}

		p{
			width: 110px;
			text-align: center;
		}

		#name{
			color: #0068fc;
			font: 400 16px 'Poppins', sans-serif;
		}

		#meetingScheduled{
			color: ${props => {if(props.values.meetingScheduled < 5){
				return 'red'
			} else if (
				props.values.meetingScheduled >= 5 
				&& props.values.meetingScheduled< 8
			){
				return 'yellow'
			} else {
				return 'green'
			}}};
		}
`;
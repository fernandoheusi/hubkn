import styled from "styled-components";
import { SellersResume } from "../ResumeSheet";

interface ContainerProps{
	values: SellersResume;
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

		#meanTicket{
			color: ${props => {if(props.values.meanTicket < 5){
				return 'red'
			} else if (
				props.values.meanTicket >= 5 
				&& props.values.meanTicket< 8
			){
				return 'yellow'
			} else {
				return 'green'
			}}};
		}
`;
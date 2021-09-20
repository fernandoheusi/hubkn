import styled from "styled-components";
import { VictoryChart } from "victory";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	align-items: stretch;

	main{
		margin-top: 122px;
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;

			#chart-div{
				width: 90%;
				align-items: center;
				justify-content: center;
				text-align:center;
				max-width: 768px;

					h1{
						margin-top: 20px;
						margin-bottom: -50px;
						color: #0068fc;
						font: 400 24px 'Roboto', sans-serif;
						/* font-family: 500 36px 'Roboto', sans-serif; */
					}
			}
	}
`;

export const Chart = styled(VictoryChart)`
	font-size: 8;
`;
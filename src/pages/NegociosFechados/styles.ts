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
				max-width: 700px;

					h1{
						margin-top: 20px;
						margin-bottom: -50px;
					}
			}
	}
`;

export const Chart = styled(VictoryChart)`
	font-size: 8;
`;
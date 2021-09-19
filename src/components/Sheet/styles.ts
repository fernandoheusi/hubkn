import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 768px;
	align-items: center;

	margin-top: 20px;
	padding: 20px;

	border-radius: 5px;

		#sheet-header{
			display: flex;
			flex-direction: row;

			width: 100%;

			align-items: center;
			justify-content: space-between;

			padding: 10px;
			border-bottom: 1px solid black;

			button {
				font: 400 14px 'Poppins', sans-serif;
				text-align: center;
				background-color: rgba(0,0,0,0);
				border: 0;
				color: #888;
				width: 100px;
				cursor: pointer;
			}
			button:disabled{
				cursor: text;
			}

			button:hover{
				text-shadow: 1px 1px #ccc;
			}

			button:active{
				text-shadow: 0 0 #FFF;
			}
		}
`;
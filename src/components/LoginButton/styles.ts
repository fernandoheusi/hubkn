import styled from "styled-components";

export const Container = styled.button`
	display: flex;
	flex-direction: row;
	width: 60px;
	align-items: center;
	justify-content: space-between;
	border: 0;
	background-color: rgba(0,0,0,0);
	text-decoration: none;

		img {
			height: 16px;
			width: 16px;
		}

		h1{
			font: 400 16px 'Poppins', sans-serif;
			color: #aaa;
		}
`;
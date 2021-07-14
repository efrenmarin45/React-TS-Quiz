import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./img/BGImage1.jpg";

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }

    body{
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	> p {
		color: #fff;
	}

	.score {
		color: black;
		font-size: 2rem;
		margin: 0;
		background-color: #ebfeff;
		margin-bottom: 20px;
		border-radius: 10px;
		border: 2px solid #0085a3;
		padding: 5px 25px;
        filter: drop-shadow(4px 2px #3ba0f2);
	}

	h1 {
		font-family: "Staatliches", sans serif;
		background-color: #fff;
		border-radius: 20px;
		background-size: 100%;
		padding: 5px 25px;
		filter: drop-shadow(4px 2px #3ba0f2);
		font-size: 70px;
		text-align: center;
		margin: 20px;
	}

	.start,
	.next {
		cursor: pointer;
		border: 2px solid #fff;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
		border-radius: 10px;
		height: 40px;
		margin: 20px 0;
		padding: 0 40px;
		background-color: #00c0f6;
		color: #fff;
		text-shadow: 1px 1px #003443;
	}

	.start {
		max-width: 200px;
		font-size: 1.3rem;
	}

	.loadingText {
		font-family: "Press Start 2p";
		font-size: 2rem;
		margin-top: 50px;
		text-shadow: 2px 2px black;
	}
`;

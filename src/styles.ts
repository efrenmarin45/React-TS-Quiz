import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./img/BGImage1.jpg";
import BGImageSm from "./img/BGImage9.jpg";

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

	@media (max-width: 1025px){
		body{
			background-image: none;
			background: rgb(125,254,255);
			background: linear-gradient(145deg, rgba(125,254,255,1) 0%, rgba(219,83,225,1) 100%);
		}
		body{
			background-image: url(${BGImageSm});
			background-size: contain;
		}
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
		padding: 5px 25px;
		filter: drop-shadow(4px 2px #3ba0f2);
		font-size: 70px;
		text-align: center;
		margin: 20px;
	}

	.start,
	.next,
	.tryAgain {
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
		-webkit-animation-name: start; /* Safari 4.0 - 8.0 */
		-webkit-animation-duration: 1s; /* Safari 4.0 - 8.0 */
		animation-name: start;
		animation-duration: 1s;
		animation-iteration-count: infinite;
	}

	.tryAgain {
		margin-top: 100px;
		max-width: 200px;
		font-size: 1.3rem;
		-webkit-animation-name: start; /* Safari 4.0 - 8.0 */
		-webkit-animation-duration: 1s; /* Safari 4.0 - 8.0 */
		animation-name: start;
		animation-duration: 1s;
		animation-iteration-count: infinite;
	}

	.hidden{
		display: none;
	}

	/* Safari 4.0 - 8.0 */
	@-webkit-keyframes start {
		0%   {background-color: #00a0cc;}
		15%  {background-color: #00B0E0;}
		25%  {background-color: #00C0F6;}
		100% {background-color: #00a0cc;}
	}
	

	/* Standard syntax */
	@keyframes start {
		0%   {background-color: #00a0cc;}
		15%  {background-color: #00B0E0;}
		25%  {background-color: #00C0F6;}
		100% {background-color: #00a0cc;}
	}

	.loadingText {
		font-family: "Press Start 2p";
		font-size: 2rem;
		margin-top: 50px;
		text-shadow: 2px 2px black;
	}

	@media (max-width: 1025px){
		h1{
			font-size: 60px;
			filter: drop-shadow(4px 2px #038951);
		}

		.start{
			background-color: #038951;
			-webkit-animation-name: start; /* Safari 4.0 - 8.0 */
			-webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
			animation-name: start;
			animation-duration: 4s;
			margin: 150px 0;
		}

		/* Safari 4.0 - 8.0 */
		@-webkit-keyframes start {
			0%   {background-color: #00693E;}
			25%  {background-color: #177245;}
			50%  {background-color: #03C03C;}
			100% {background-color: #00693E;}
		}
		

		/* Standard syntax */
		@keyframes start {
			0%   {background-color: #00693E;}
			25%  {background-color: #177245;}
			50%  {background-color: #03C03C;}
			100% {background-color: #00693E;}
		}
	}

	@media (max-width: 800px){
		h1{
			font-size: 50px;
		}
	}

	@media (max-width: 450px){
		h1{
			font-size: 40px;
		}

		.start{
			max-width: 175px;
			font-size: 1.2rem;
			padding: 0 35px;
			background-color: #038951;
		}
	}

	@media (max-width: 380px){
		h1{
			font-size: 30px;
		}

		.start{
			max-width: 150px;
			font-size: 1.1rem;
		}
	}

	@media (max-width: 300px){
		h1{
			font-size: 25px;
		}

		.start{
			max-width: 125px;
			font-size: 1rem;
		}
	}
	
`;

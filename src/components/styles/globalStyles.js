import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
	background: url("${props => props.background}") center no-repeat;
	background-size:cover;
}

html {
	box-sizing: border-box;
	font-size: 16px;
	height: 100%;
	color: #333;
	
	@media (max-width: 767px) {
		font-size: 14px;
	}
}
*,
*:before,
*:after {
	box-sizing: inherit;
}


body{
	margin: 0;
	padding: 0;
	font-family: sans-serif;
	height: 100%
}

#root {
	padding: 2rem;
}

.navigation {
	display:flex;
	gap: 1.5rem;
	button {
		width: 50%;
		display: inline-block;
		padding: 15px;
		font-size: 1.5rem;
	}
}

.welcome-container {
	position: absolute;
	top:0;
	left:0;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: white;
	flex-direction:column;
	
	h1 {
		text-align: center;
	}
	
	button {
		padding: 1rem 2rem;
		font-size: 1.5rem;
	}
}
`;

export default GlobalStyle;

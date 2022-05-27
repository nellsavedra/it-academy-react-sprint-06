import styled from "styled-components";

const StyledParagraph = styled.p`
	padding: 15px;
	border: 2px solid #333;
	border-radius: 100px;
	text-align: center;
	background: rgba(255, 255, 255, .5);

	&.activo {
		background: pink;
	}
`;

const Escena = ({ frases, estado }) =>
	frases.map((frase, index) => {
		return (
			<StyledParagraph key={index + "-frases"} className={index === estado && "activo"}>
				{frase.text}
			</StyledParagraph>
		);
	});

export default Escena;


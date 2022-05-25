const Button = ({texto, onclick}) => {
	return (
		<>
		<button onClick={onclick}>{texto}</button>
		</>
	);
}

export default Button;
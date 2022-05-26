import Button from "../buttons/Buttons";
import { useState } from "react";

const WelcomePage = () => {
	const [logged, setLogged] = useState(false);
	
	return (
		!logged && (
			<div className="welcome-container">
				<h1>Bienvenido a la historieta</h1>
				<Button texto="Empezar" onclick={() => setLogged(true)} />
			</div>
		)
	);
};

export default WelcomePage;

import Escena from "./components/escena/Escena";
import Frases from "./components/escena/frases";
import Button from "./components/buttons/Buttons";
import { useState } from "react";
import WelcomePage from "./components/welcome/Welcome";
import GlobalStyle from "./components/styles/globalStyles";


function App() {
	const [actived, setActived] = useState(0);
	
	return (
		<>
			<GlobalStyle background={Frases[actived].img} />	
			<WelcomePage />
			<nav className="navigation">
				<Button texto="Anterior" onclick={() => (actived === 0 ? setActived(Frases.length - 1) : setActived(actived - 1))} />
				<Button texto="Siguiente" onclick={() => (Frases.length - 1 === actived ? setActived(0) : setActived(actived + 1))} />
			</nav>
			<Escena frases={Frases} estado={actived} />
		</>
	);
}

export default App;

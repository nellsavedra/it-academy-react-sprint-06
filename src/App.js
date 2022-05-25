import Escena from "./components/escena/Escena";
import Frases from "./components/escena/frases";
import Button from "./components/buttons/Buttons"
import { useState } from "react";

function App() {
	
	const [actived, setActived] = useState(0);
	
	
	return (
		<>
			<Button texto="Anterior" onclick={() => actived === 0 ? setActived(Frases.length - 1) : setActived(actived - 1) }></Button>
			<Button texto="Siguiente" onclick={() => Frases.length - 1 === actived ? setActived(0) : setActived(actived + 1) }></Button>
			<Escena frases={Frases} estado={actived} />
		</>
	);
}

export default App;

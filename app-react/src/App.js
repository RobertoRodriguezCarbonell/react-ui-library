import "./App.css";
import { RopoButton } from "@ropotober/react-ui-library";
import { FaPhone } from "react-icons/fa"; // Importa el icono de FontAwesome

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RopoButton
          text="Contestar Llamada"
          width={200}
          variant="gradient"
          animation="shake"
          textColor="#000000"
          animationDuration="0.82s"
          animationInterval="3s"
          backgroundColor="#87bd27"
          // Añade el icono aquí
          icon={<FaPhone />}
          rounded="md"
        />
        {/* Otros botones */}
        <RopoButton />
      </header>
    </div>
  );
}

export default App;

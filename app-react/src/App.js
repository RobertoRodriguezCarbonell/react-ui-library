import "./App.css";
import { RopoButton } from "@ropotober/react-ui-library";
import { FaCoffee } from "react-icons/fa"; // Importa el icono de FontAwesome

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RopoButton
          text="Outline Button"
          variant="gradient"
          animation="shake"
          textColor="#000000"
          animationDuration="0.82s"
          animationInterval="3s"
          backgroundColor="#87bd27"
          icon={<FaCoffee />} // Añade el icono aquí
        />
        {/* Otros botones */}
      </header>
    </div>
  );
}

export default App;

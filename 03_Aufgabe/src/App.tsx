import Begruessung from "./Begruessung";
import Zaehler from "./Zaehler";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Meine Aufgabe</h1>
      <Begruessung />
      <Zaehler />
    </div>
  );
}

export default App;


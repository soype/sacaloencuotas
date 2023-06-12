import "./App.css";

import Form from "./components/calculator/Form";
import Stonks from "./assets/Stonks";
import Tarjeta from "./assets/Tarjeta";
import Dot from "./assets/Dot";
import Bar from "./assets/Bar";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <h1>Sacalo en cuotas</h1>
      <Form></Form>
      <Stonks></Stonks>
      <Tarjeta></Tarjeta>
      <Dot></Dot>
      <Bar></Bar>
      <About></About>
      <div className="firma">
        <a href="https://soype.ar" target='_blank' rel='nonopener noreferrer'>Desarollado por Pedro Henestroza</a>
      </div>
    </div>
  );
}

export default App;

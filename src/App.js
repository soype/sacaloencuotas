import "./App.css";

import Form from "./components/calculator/Form";
import Stonks from "./assets/Stonks";
import Tarjeta from "./assets/Tarjeta";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <h1>Sacalo en cuotas</h1>
      <Form></Form>
      <Stonks></Stonks>
      <Tarjeta></Tarjeta>
      <About></About>
    </div>
  );
}

export default App;

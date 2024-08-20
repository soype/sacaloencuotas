import { useState } from "react";

import "./App.css";

import Form from "./components/calculator/Form";
import Stonks from "./assets/Stonks";
import Tarjeta from "./assets/Tarjeta";
import Dot from "./assets/Dot";
import Bar from "./assets/Bar";
import About from "./components/about/About";
import Modal from './components/about/Modal';
import Dollar from "./components/dollar/Dollar";

function App( props ) {

  const [showModal, setShowModal] = useState(false);
  // const [showDollarModal, setShowDollarModal] = useState(false);

  return (
    <div className="App">
      { showModal && <Modal displayModal={setShowModal}></Modal> }
      <h1>Sacalo en cuotas</h1>
      <Form></Form>
      <Tarjeta></Tarjeta>
      <Dot></Dot>
      <About modal={showModal} displayModal={setShowModal}></About>
      {/* <Dollar question={'Y si tengo dolares?'} modal={showDollarModal} displayModal={setShowDollarModal}></Dollar> */}
      <Stonks></Stonks>
      <div className="firma">
        <a href="https://soype.ar" target="_blank" rel="nonopener noreferrer">
          Desarollado por Pedro Henestroza
        </a>
      </div>
    </div>
  );
}

export default App;

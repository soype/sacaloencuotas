import React, { useState, useEffect } from "react";

import styles from "./Form.module.css";
import Card from "../UI/Card";
import Result from "./Result";

const Form = () => {
  const [tasa, setTasa] = useState();
  const [tasaInt, setTasaInt] = useState(0);
  const [resultado, setResultado] = useState("");
  const [valorInicial, setValorInicial] = useState(0);
  const [valorCuota, setValorCuota] = useState(0);
  const [cantCuotas, setCantCuotas] = useState(0);
  const [valorFinal, setValorFinal] = useState(0);

  const apiToken = process.env.REACT_APP_API_TOKEN;

  const apiUrl = "tasa_depositos_30_dias";
  const proxyUrl = "https://bcra-proxy-cors.vercel.app";

  useEffect(() => {
    fetch(`${proxyUrl}/${apiUrl}`, {headers:{
      Authorization: `${apiToken}`,
    }})
    .then((res) => res.json())
    .then(data => {
      const lastItem = data[data.length - 1]; // Access the last item in the data array
      setTasa(lastItem.v / 100); // Process the last item as needed
    })
    .catch(error => console.log(error))
  }, [resultado])


  // Fallback por si falla la API de BCRA.
  useEffect(() => {
    setTasa(0.9299);
  })

  useEffect(() => {
    setValorFinal(valorCuota * cantCuotas);
    let plazoFijo = valorInicial;
    for (let i = 0; i < cantCuotas; i++) {
      plazoFijo = plazoFijo * (1 + tasa / 12) - valorCuota;
    }
    if (plazoFijo > 0) {
      let diferencia = Math.abs(plazoFijo);
      setResultado(
        "Te conviene sacarlo en cuotas. Si invertís los $ " +
          valorInicial +
          " que cuesta el producto en un plazo fijo y vas retirando el pago de las cuotas, ganarías $ " +
          diferencia.toFixed(2) +
          " en total."
      );
    } else if (plazoFijo < 0) {
      let diferencia = Math.abs(plazoFijo);
      setResultado(
        "No conviene comprar el producto en cuotas. Comparado a un plazo fijo, perderías $ " +
          diferencia.toFixed(2) +
          " por lo que es más conveniente comprar en una sola cuota."
      );
    } else {
      setResultado(
        "El plazo fijo con retiros constantes es igual al valor final. No habría diferencia en comprarlo en una sola cuota."
      );
    }
    setTasaInt(((valorFinal / valorInicial - 1) / cantCuotas * 12).toFixed(2) );
  }, [valorFinal, valorInicial, tasa, valorCuota, cantCuotas]);

  const valorInicialHandler = (e) => {
    setValorInicial(e.currentTarget.value);
  };

  const valorCuotaHandler = (e) => {
    setValorCuota(e.currentTarget.value);
  };
  const cantCuotasHandler = (e) => {
    setCantCuotas(e.currentTarget.value);
  };

  const valorFinalHandler = (e) => {
    setValorFinal(e.currentTarget.value);
  };

  return (
    <Card className={styles.form}>
      <form onSubmit={(event) => event.preventDefault()} className={styles.calculator}>
        <p>
          Ingresá acá el valor del bien que querés comprar si pagaras en
          efectivo o una cuota. Buscá el menor valor posible.
        </p>
        <label htmlFor="">Valor sin cuotas</label>
        <input
          type="number"
          placeholder={valorInicial}
          onChange={valorInicialHandler}
        />
        <p>
          Ingresá el valor total con cuotas o bien la cuota que pagarías para
          calcular el CFT resultante y ver si te conviene la compra.
        </p>
        <label htmlFor="">Valor de cada cuota</label>
        <input type="number" placeholder={valorCuota} onChange={valorCuotaHandler} />
        <label htmlFor="">Cantidad de cuotas</label>
        <input type="number" placeholder={cantCuotas} onChange={cantCuotasHandler} />
        <label htmlFor="">Valor total con cuotas</label>
        <input type="number" value={valorFinal} onChange={valorFinalHandler} />
        <p>Tasa de interés: {tasaInt * 100}%</p>
        <p>Tasa plazo fijo: {tasa * 100}%</p>
      </form>
      <Result resultado={resultado}></Result>
    </Card>
  );
};

export default Form;

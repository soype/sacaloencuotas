import React, {useEffect} from "react";

import styles from "./Result.module.css";

const Result = (props) => {

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
      props.tasaPlazoHandler(lastItem.v / 100); // Process the last item as needed
    })
    .catch(error => console.log(error))
  }, [])


  // Fallback por si falla la API de BCRA.
  useEffect(() => {
    props.tasaPlazoHandler(0.9299);
  },[])

  const plazoFijoHandler = (e) => {
    props.tasaPlazoHandler(e.target.value / 100)
  }

  return (
    <div className={styles.resultado}>
      <div className={styles.numeros}>
        <div className={styles["tasa"]}>
          <p>Tasa de plazo fijo</p>
          <input type="number" value={props.plazoFijo} onChange={plazoFijoHandler} />
        </div>
        <div className={styles["calculo"]}>
          <p>Valor final:</p>
          <p className={styles["valor-final"]}>$ {props.valorFinal}</p>
          <p className={styles["tasa-interes"]}>{props.interes}</p>
        </div>
      </div>
      <div className={styles.texto}></div>
      {props.resultado}
    </div>
  );
};

export default Result;

import React, { useEffect } from "react";

import MiniCard from "../UI/MiniCard";

import styles from "./Result.module.css";

const Result = (props) => {
  
  // Fallback por si falla la API de BCRA.
  useEffect(() => {
    props.tasaPlazoHandler(0.9699);
  }, []);

  const plazoFijoHandler = (e) => {
    props.tasaPlazoHandler(e.target.value / 100);
  };

  return (
    <div className={styles.resultado}>
      <div className={styles.numeros}>
        <MiniCard>
          <p className={styles.minititle}><strong>Tasa de plazo fijo</strong></p>
          <input
            type="number"
            value={props.plazoFijo}
            onChange={plazoFijoHandler}
          />
        </MiniCard>
        <MiniCard>
          <p className={styles.minititle}><strong>Valor con cuotas</strong></p>
          <p className={styles["valor-final"]}>Valor final: $ {props.valorFinal}</p>
          <p className={styles["tasa-interes"]}>Interés cobrado: {props.interes}%</p>
        </MiniCard>
      </div>
      <div className={styles.texto}>
        <h3>Resultado</h3>
        {props.resultado}
      </div>
      
    </div>
  );
};

export default Result;

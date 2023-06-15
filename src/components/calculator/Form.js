import React, { useState, useEffect } from "react";

import styles from "./Form.module.css";
import Card from "../UI/Card";
import Result from "./Result";

const Form = (props) => {
  const [opcion, setOpcion] = useState(true);
  const [tasa, setTasa] = useState();
  const [tasaInt, setTasaInt] = useState(0);
  const [resultado, setResultado] = useState("");
  const [valorInicial, setValorInicial] = useState(0);
  const [valorCuota, setValorCuota] = useState(0);
  const [cantCuotas, setCantCuotas] = useState(0);
  const [valorFinal, setValorFinal] = useState(0);

  let moneyOptions = {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  };

  const moneyString = new Intl.NumberFormat("es-AR", moneyOptions);

  useEffect(() => {
    if (opcion) {
      if (valorCuota !== 0 && cantCuotas !== 0 && valorInicial !== 0) {
        setValorFinal(valorCuota * cantCuotas);
        let plazoFijo = valorInicial;
        for (let i = 0; i < cantCuotas; i++) {
          plazoFijo = plazoFijo * (1 + tasa / 12) - valorCuota;
        }
        if (plazoFijo > 0) {
          let diferencia = Math.abs(plazoFijo);
          setResultado(
            "Te conviene sacarlo en cuotas. Si invertís los $ " +
              moneyString.format(valorInicial) +
              " que cuesta el producto en un plazo fijo y vas retirando el pago de las cuotas, ganarías $ " +
              moneyString.format(diferencia) +
              " en total."
          );
        } else if (plazoFijo < 0) {
          let diferencia = Math.abs(plazoFijo);
          setResultado(
            "No conviene comprar el producto en cuotas. Aún haciendo un plazo fijo terminarías pagando $ " +
              moneyString.format(diferencia) +
              " más que comprando en un solo pago."
          );
        } else {
          setResultado(
            "El plazo fijo con retiros constantes es igual al valor final. No habría diferencia en comprarlo en una sola cuota."
          );
        }
        setTasaInt(
          (((valorFinal / valorInicial - 1) / cantCuotas) * 12).toFixed(2)
        );
      }
    } else {
      if (valorCuota !== 0 && cantCuotas !== 0 && valorInicial !== 0) {
        setValorFinal(valorCuota);
        let plazoFijo = valorInicial;
        for (let i = 0; i < cantCuotas; i++) {
          plazoFijo = plazoFijo * (1 + tasa / 12) - valorCuota / cantCuotas;
        }
        if (plazoFijo > 0) {
          let diferencia = Math.abs(plazoFijo);
          setResultado(
            "Te conviene sacarlo en cuotas. Si invertís los $ " +
              moneyString.format(valorInicial) +
              " que cuesta el producto en un plazo fijo y vas retirando el pago de las cuotas, ganarías $ " +
              moneyString.format(diferencia) +
              " en total."
          );
        } else if (plazoFijo < 0) {
          let diferencia = Math.abs(plazoFijo);
          setResultado(
            "No conviene comprar el producto en cuotas. Aún haciendo un plazo fijo terminarías pagando $ " +
              moneyString.format(diferencia) +
              " más que comprando en un solo pago."
          );
        } else {
          setResultado(
            "El plazo fijo con retiros constantes es igual al valor final. No habría diferencia en comprarlo en una sola cuota."
          );
        }
        setTasaInt(
          (((valorFinal / valorInicial - 1) / cantCuotas) * 12).toFixed(2)
        );
      }
    }
  }, [valorFinal, valorInicial, tasa, valorCuota, cantCuotas, opcion, moneyString]);

  const valorInicialHandler = (e) => {
    setValorInicial(e.currentTarget.value);
  };

  const valorCuotaHandler = (e) => {
    setValorCuota(e.currentTarget.value);
  };
  const cantCuotasHandler = (e) => {
    setCantCuotas(e.currentTarget.value);
  };

  const opcionHandler = (e) => {
    if (e.target.checked) {
      setOpcion(false);
      setValorCuota(0);
      document.getElementById("valorCuota").value = "";
    } else {
      setOpcion(true);
      setValorCuota(0);
      document.getElementById("valorCuota").value = "";
    }
  };

  return (
    <Card className={styles.form}>
      <form
        onSubmit={(event) => event.preventDefault()}
        className={styles.calculator}
      >
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
          Ingresá la cuota que pagarías para calcular si te conviene hacer la
          compra en un pago o en cuotas.
        </p>
        <div className={styles.opciones}>
          <label htmlFor="" className={opcion && styles["opcion-selected"]}>
            Valor cuota
          </label>
          <input
            class={styles["form-check-input"]}
            onChange={opcionHandler}
            type="checkbox"
            value="1"
            name="remember_me"
            id="rememberMeSwitch"
          ></input>
          <label htmlFor="" className={!opcion && styles["opcion-selected"]}>
            Valor total
          </label>
        </div>
        <input
          type="number"
          id="valorCuota"
          placeholder={valorCuota}
          onChange={valorCuotaHandler}
        />
        <label htmlFor="">Cantidad de cuotas</label>
        <input
          type="number"
          placeholder={cantCuotas}
          onChange={cantCuotasHandler}
        />
      </form>
      <Result
        resultado={resultado}
        valorFinal={valorFinal}
        interes={tasaInt * 100}
        plazoFijo={tasa * 100}
        tasa={tasa}
        tasaPlazoHandler={setTasa}
      ></Result>
    </Card>
  );
};

export default Form;

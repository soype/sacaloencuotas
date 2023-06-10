import React, {useState} from 'react'

import styles from './Form.module.css';
import Card from '../UI/Card';
import Result from './Result';

const Form = () => {

    const [resultado, setResultado] = useState('Conviene');
    const [valorInicial, setValorInicial] = useState(0);
    const [valorCuota, setValorCuota] = useState(0);
    const [cantCuotas, setCantCuotas] = useState(0);
    const [valorFinal, setValorFinal] = useState(0);
    const [valorFinalDisplay, setValorFinalDisplay] = useState(0);

    const calcularCuotas = (e) => {
        e.preventDefault();
        setValorFinal(valorCuota * cantCuotas);
        setValorFinalDisplay(valorCuota * cantCuotas);
        console.log(valorFinalDisplay);
        setValorCuota(0);
        setCantCuotas(0);
        setValorFinal(0);
        
    }

    const valorInicialHandler = e => {
        setValorInicial(e.currentTarget.value);
    }

    const valorCuotaHandler = e => {
        setValorCuota(e.currentTarget.value);
    }
    const cantCuotasHandler = e => {
        setCantCuotas(e.currentTarget.value);
    }

    const valorFinalHandler = e => {
        setValorFinal(e.currentTarget.value);
    }
    

  return (
    <Card className={styles.form}>
        <form onSubmit={calcularCuotas} className={styles.calculator}>
            <p>Ingresá acá el valor del bien que querés comprar si pagaras en efectivo o una cuota. Buscá el menor valor posible.</p>
            <label htmlFor="">Valor sin cuotas</label>
            <input type="number" value={valorInicial} onChange={valorInicialHandler} />
            <p>Ingresá el valor total con cuotas o bien la cuota que pagarías para calcular el CFT resultante y ver si te conviene la compra.</p>
            <label htmlFor="">Valor de cada cuota</label>
            <input type="number" value={valorCuota} onChange={valorCuotaHandler} />
            <label htmlFor="">Cantidad de cuotas</label>
            <input type="number" value={cantCuotas} onChange={cantCuotasHandler} />
            <label htmlFor="">Valor total con cuotas</label>
            <input type="number" value={valorFinal} onChange={valorFinalHandler} />
            <button className={styles.submit}>Calcular</button>
        </form>
        <Result resultado={resultado}></Result>
    </Card> 
  )
}

export default Form
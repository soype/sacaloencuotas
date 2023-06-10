import React, {useState} from 'react'

import styles from './Form.module.css';
import Card from '../UI/Card';
import Result from './Result';

const Form = () => {

    const [resultado, setResultado] = useState('Conviene');

    const calcularCuotas = (e) => {
        e.preventDefault();
    }

    

  return (
    <Card className={styles.form}>
        <form onSubmit={calcularCuotas} className={styles.calculator}>
            <p>Ingresá acá el valor del bien que querés comprar si pagaras en efectivo o una cuota. Buscá el menor valor posible.</p>
            <label htmlFor="">Valor sin cuotas</label>
            <input type="number" />
            <p>Ingresá el valor total con cuotas o bien la cuota que pagarías para calcular el CFT resultante y ver si te conviene la compra.</p>
            <label htmlFor="">Valor de cada cuota</label>
            <input type="number" />
            <label htmlFor="">Cantidad de cuotas</label>
            <input type="number" />
            <label htmlFor="">Valor total con cuotas</label>
            <input type="number" />
            <button className={styles.submit}>Calcular</button>
        </form>
        <Result resultado={resultado}></Result>
    </Card> 
  )
}

export default Form
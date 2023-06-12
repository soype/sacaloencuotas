import React from 'react'

import Card from '../UI/Card';

import styles from './Modal.module.css';

const Modal = (props) => {

  const displayModalHandler = () => {
    props.displayModal(false)
  }

  return (
    <div className={styles.modal} >
      <div className={styles["modal-background"]} onClick={displayModalHandler}></div>
      <Card className={styles['modal-card']}>
        <p>Sacalo en cuotas es una app que te permite calcular si te conviene comprar un producto en un solo pago o en cuotas con interés</p>
        <p>Para ello, se utiliza la tasa de interés del plazo fijo del Banco Nación, que generalmente es la más alta del mercado. Sin embargo, podés modificar a mano la tasa del plazo fijo para reflejar tu situación particular</p>
        <p>La aplicación asume que tenés el efectivo disponible para realizar la compra, y propone que lo pongas en un plazo fijo por la duración de las potenciales cuotas. A cada pago de cuota, cobrás el plazo fijo y retirás el valor de la cuota. El dinero restante, lo volvés a invertir en plazo fijo hasta el mes siguiente.</p>
        <p>Esta es tan solo una referencia y tené en cuenta que la tasa del plazo fijo puede variar mensualmente.</p>
        <p>Hace click en cualquier lado de la pantalla para regresar al calculador.</p>
      </Card>
    </div>
  )
}

export default Modal
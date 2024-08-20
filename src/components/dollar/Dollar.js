import React from 'react';

import styles from './Dollar.module.css';
import Modal from '../modal/Modal';


const Dollar = ({question, modal, showModal }) => {
  
  return (
    <button className={styles.dollar}>{question}</button>
  )
}

export default Dollar;
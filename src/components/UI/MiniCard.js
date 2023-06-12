import React from 'react'

import styles from './MiniCard.module.css';

const MiniCard = (props) => {
  return (
    <div className={`${styles.minicard} ${styles[props.className]}`}>
        {props.children}
    </div>
  )
}

export default MiniCard
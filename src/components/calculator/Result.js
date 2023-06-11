import React from 'react';

import styles from './Result.module.css';

const Result = (props) => {
  return (
    <div className={styles.resultado}>{props.resultado}</div>
  )
}

export default Result
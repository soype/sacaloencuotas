import React from 'react';

import styles from './About.module.css';

const About = (props) => {

  const displayModalHandler = () => {
    if(props.modal){
      props.displayModal(false);  
    }else{
      props.displayModal(true);
    }
  };
  

  return (
    <div className={styles.about} onClick={displayModalHandler}>
        <h3>¿Cómo funciona?</h3>
    </div>
  )
}

export default About
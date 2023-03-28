import React from "react"
import styles from "./Card.module.css"

export default function Card({name, flag, continent, capital, population, id}) {
  return (
  <div className={styles.cardContainer}>
      <h3>{name}</h3>
      <img className= {styles.cardImg}src={flag} alt='Imagen no encontrada'/>
      <div className={styles.infoConteiner}>
      <h5 className={styles.content}>Capital: {capital}</h5>
      <h5 className={styles.content}>Continente: {continent}</h5>
      <h5 className={styles.content}>Poblacion: {population}</h5>
      </div>
  </div>
  )

};

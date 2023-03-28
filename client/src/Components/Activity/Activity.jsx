import React from "react"
import styles from "../ActivitiesList/ActivitiesList.jsx"

export default function Activity({ name, duration, season, difficulty, countryId }) {
  return (
    <div className={styles.divActivityContainer}>
      <h2 className={styles.h2Activity}>{name}</h2>
      <h3 className={styles.h3Activity}>Duracion: {duration}</h3>
      <h3 className={styles.h3Activity}>Temporada: {season}</h3>
      <h3 className={styles.h3Activity}>Dificultad: {difficulty}</h3>
      <h3>{countryId}</h3>
    </div>
  );
}

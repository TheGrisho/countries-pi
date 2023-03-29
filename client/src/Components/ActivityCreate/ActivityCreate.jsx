import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postActivities, getActivities } from "../../Actions/Actions.js";
import { INVIERNO, VERANO, OTOÑO, PRIMAVERA } from "../../const/Const.js";
import NavBar from "../NavBar/NavBar.jsx";
import styles from "../ActivityCreate/ActivityCreate.module.css";

 let id=0;
function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Debe completar este campo";
  } else if (!input.duration) {
    errors.duration = "Debe completar este campo";
  } else if (!input.difficulty) {
    errors.difficulty = "Debe seleccionar la complejidad";
  } else if (!input.season) {
    errors.season = "Debe seleccionar una estacion";
  } else if (input.countryId === []) {
    errors.countryId = "Debe seleccionar un pais";
  }
  return errors;
}

export default function ActivityCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector((state) => state.allCountries);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    id: 0,
    name: "",
    duration: "",
    difficulty: "",
    season: "",
    countryId: [],
  });

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleDelete(i) {
    setInput({
      ...input,
      countryId: input.countryId.filter((el) => el !== i),
    });
  }

  function handleSelect(e) {
    setInput({ ...input, countryId: [...input.countryId, e.target.value] });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.name === "" ||
    input.duration === "" ||
    input.difficulty === "" ||
    input.season === "" ||
    input.countryId.length === 0) return alert('Debe llenar los campos');
    dispatch(postActivities(input));
    alert("Actividad Creada");
    setInput({
      id: id++, 
      name: "",
      duration: "",
      difficulty: "",
      season: "",
      countryId: [],
    });
    history.push("/home");
  }

  return (
    <div className="">
      <div>
        <NavBar />
      </div>

      <div className={styles.activityCardContainer}>
        <div className={styles.activityCard}>
          <div className={styles.activityTitle}>
          </div>  

          <form className={styles.formActivity} onSubmit={handleSubmit}>
            <span className={styles.titleCreateActivity}> Crea una Actividad </span>
            <div className={styles.inputActivities}>
              <label className={styles.labelActivity}></label>
              <input
                className={styles.i}
                type="text"
                placeholder="Coloque la Actividad..."
                value={input.name}
                name="name"
                onChange={handleChange}
              />
              {errors.name && <p className={styles.e}>{errors.name}</p>}
            </div>
            <div className={styles.inputActivities}>
              <label></label>
              <input
                className={styles.i}
                type="text"
                value={input.duration}
                name="duration"
                placeholder="Coloque la Duracion..."
                onChange={handleChange}
              />
              {errors.duration && <p className={styles.e}>{errors.duration}</p>}
            </div>
            <div className={styles.inputActivities}>
              <label> Dificultad </label>
              <input
                className={styles.i}
                type="range"
                name="difficulty"
                min="1"
                max="5"
                value={input.difficulty}
                onChange={(e) => handleChange(e)}
              />
              {errors.difficulty && <p className={styles.e}> {errors.difficulty}</p>}
            </div>
            <div className={styles.seasonInput}>
              <select
                className={styles.i}
                name="season"
                value={input.season}
                onChange={(e) => handleChange(e)}
              >
                <option className={styles.op} > Temporada </option>
                <option className={styles.op} value={INVIERNO}>Invierno</option>
                <option className={styles.op} value={VERANO}>Verano</option>
                <option className={styles.op} value={OTOÑO}>Otoño</option>
                <option className={styles.op} value={PRIMAVERA}>Primavera</option>
              </select>
              {errors.season && <p className={styles.e}>{errors.season}</p>}
            </div>
            {errors.countryId && <p className={styles.e}>{errors.countryId}</p>}

            <div>
              <select  className={styles.i} onChange={(e) => handleSelect(e)}>
                <option className={styles.op} > Paises </option>
                {countries.map((v) => (
                  <option className={styles.op} value={v.id}>{v.name}</option>
                ))}
              </select>
            </div>

            <div className={styles.textArea}>
              {input.countryId.map((country) => (
                <div className={styles.countrieAndButton}>
                  <input className={styles.btnDelete} type='button' value='X' onClick={() => handleDelete(country)}/>
                  <p className={styles.pOfCountry}>{country}</p>
                </div>
              ))}
            </div>
            <div>
              <button className={styles.btnActivity} type="submit">Crear Actividad</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

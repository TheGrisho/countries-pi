import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail, restartDetail } from "../../Actions/Actions.js";
import NavBar from "../NavBar/NavBar.jsx";
import styles from "../Details/Detail.module.css"



export default function Detail (props){
    const dispatch = useDispatch()
    console.log(props.match.params.id)
    useEffect(() => {
      dispatch(restartDetail())
      dispatch(getDetail(props.match.params.id)) 
    },[dispatch, props.match.params.id])

    const countriesDetail = useSelector((state)=> state.detail)

  return (

    <div key={countriesDetail.id} className={styles.detailNav}>
      <div>
      <NavBar/>
      </div>

      <div className={styles.detailContainer}>{
          countriesDetail.length ?
              <div className={styles.detailContent}>
                  <img className={styles.objDetail} src={countriesDetail[0].flag} alt='Imagen no encontrada' width='250px' height='175px'/>
                  <h1 className={styles.objDetail}>{countriesDetail[0].name}</h1>
                  <div className={styles.obj2Detail}>
                  <h2>Id: {countriesDetail[0].id}</h2>
                  <h2>Capital: {countriesDetail[0].capital}</h2>
                  <h2>Continente: {countriesDetail[0].continent}</h2>
                  <h2>Subregion: {countriesDetail[0].subregion}</h2>
                  <h2>Area: {countriesDetail[0].area} km2</h2>
                  <h2>Poblacion: {countriesDetail[0].population}</h2>
                  </div>
                  <div className={styles.activitiesDetail}>  {countriesDetail[0].activities?.map(el=>{
                    return(
                      <div>
                        <Link className={styles.linkDetail} to='/activities'>
                        <h2>Actividad</h2>
                        </Link>
                        <div className={styles.obj3Detail}>
                        <h3>{el.name}</h3>
                        <h3>Dificultad: {el.difficulty}</h3>
                        <h3>Duracion: {el.duration}</h3>
                        <h3>Temporada: {el.season}</h3>
                      </div>
                      </div>
                  )})}</div>
  
  
              </div> : <div className={styles.loading}>
                <p> Loading... </p>
                </div>
                
      }</div>
    </div>
  );
};

import React from "react";
import styles from "../Paginado/Paginado.module.css"

export default function Paginado({countriesPerPage, countries, paginado}){
    const pageNumbrers = []
    for (let i = 1; i <= Math.ceil(countries/countriesPerPage); i++) {
        pageNumbrers.push(i)   
    }
    return(
        <nav className={styles.paginadoContainer}>
            <ul className ={styles.ul}>
                {pageNumbrers && 
                pageNumbrers.map(number =>(
                    <li key={number}>
                        <a className ={styles.numeroPaginado} href onClick={()=>paginado(number)}> {number} </a>  
                    </li>
                ))}
            </ul>
        </nav>
    )}
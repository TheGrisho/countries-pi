import React from "react"; 
import SearchBar from "../SearchBar/SearchBar.jsx";
import Styles from "../NavBar/NavBar.module.css"
import{Link} from "react-router-dom";

export default function NavBar(){
return(
    <div className={Styles.navBarConteiner}>
    <div className={Styles.conteinerMerch}>
      <Link className={Styles.Logo}to="/home"></Link>
      <Link className={Styles.countries}to="/home">Countries</Link>
      <Link className={Styles.credits}to="/home">By Chris</Link>
    </div>
    <div className={Styles.navContent}>
    <Link className={Styles.navLink} to="/home">Home</Link>
    <Link className={Styles.navLink} to="/activity">Crear Actividad</Link>
    <Link className={Styles.navLink} to="/activities">Lista de Actividades</Link>
    <SearchBar className={Styles.navSearchBar}/>
  </div>
    </div>
)
}
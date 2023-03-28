import React from "react";
import NavBar from "../NavBar/NavBar"
 import Cards from  "../Cards/Cards.jsx"
import styles from "../Home/Home.module.css"

export default function Home() {
  return (
    <div className = {styles.Home}>
      <div className = {styles.NavBar}>
      <NavBar/>
     </div>
     <div className = {styles.Cards}>
      <Cards/>
     </div> 
    </div>
  );
}

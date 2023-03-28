import React from "react";
import{Link} from 'react-router-dom';
import styles from "../Landing/Landing.module.css"


export default function LandingPage(){
    return(
        <div className ={styles.landing}>
            <h1 className = {styles.Title}> Welcome To my </h1>
            <h2 className = {styles.SubTitle}> Henry Countries PI-e </h2>
            <Link to ='/home'>
                <button className={styles.Button}>Let's Get It Starteeed</button>
            </Link>
        </div>
    )
}
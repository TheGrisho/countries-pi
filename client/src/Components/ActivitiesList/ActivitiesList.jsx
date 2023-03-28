import React from "react";
import { useSelector } from "react-redux";
import Activity from "../Activity/Activity.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import styles from "../ActivitiesList/ActivitiesList.module.css"

export default function ActivitiesList() {
  const activities = useSelector((state) => state.activities);
  return (
    <div className={styles.activityListContainer}>

      <div>
        <NavBar />
      </div>

      <div className={styles.activityCardListContainer}>{
      activities?.map((acc) => {
          return (
            <div className={styles.activityCardList}>
              <Activity
                name={acc.name}
                duration={acc.duration}
                season={acc.season}
                difficulty={acc.difficulty}
              />
            </div> 
          )
        })}
      </div>
      
    </div>
  );
}

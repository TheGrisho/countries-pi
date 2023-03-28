import "./App.css";
import React from "react";
import Landing from "../src/Components/Landing/Landing.jsx"
import Home from "../src/Components/Home/Home.jsx"
import ActivityCreate from "./Components/ActivityCreate/ActivityCreate.jsx"
import ActivitiesList from "./Components/ActivitiesList/ActivitiesList.jsx"
import Detail from "../src/Components/Details/Detail.jsx"
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path ="/" component ={Landing}/>
        <Route path="/home" component={Home}/>
        <Route exact path ="/activity" component ={ActivityCreate}/>
        <Route exact path ="/activities" component = {ActivitiesList}/>
        <Route  exact path ="/home/:id" component ={Detail}/>
        </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;

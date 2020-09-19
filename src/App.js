import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/home/Home";
import ExerciseTypeForm from "./views/exercise_form/ExerciseTypeForm"
import ExerciseForm from "./views/exercise_form/ExerciseForm"
import GlobalStyle from "./global/GlobalStyle"
import NavBar from "./components/NavBar";
import { useState } from 'react'
import WorkoutDataContext from './global/WorkoutDataContext'



const App = () => {

  const [workoutData, setWorkoutData] = useState([])


  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <NavBar />
        <WorkoutDataContext.Provider value={{ workoutData, setWorkoutData }}>
          <Route exact path="/" render={ props => <Home {...props} workoutData={workoutData} />} />
          <Route exact path="/exercise-form" render={(props) => <ExerciseTypeForm {...props} />} />
          <Route exact path="/exercise-form/:exercise" render={(props) => <ExerciseForm {...props} />} />
        </WorkoutDataContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
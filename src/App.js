import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/home/Home";
import ExerciseTypeForm from "./views/exercise_form/ExerciseTypeForm"
import ExerciseForm from "./views/exercise_form/ExerciseForm"
import GlobalStyle from "./global/GlobalStyle"


function App() {



  return (
    <div className="App">
      <BrowserRouter>
          <GlobalStyle/>
          <Route exact path="/" render={(props) => <Home {...props} />}/>
          <Route exact path="/exercise-form" render={(props) => <ExerciseTypeForm {...props} />} />
          <Route exact path="/exercise-form/:exercise" render={(props) => <ExerciseForm {...props} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
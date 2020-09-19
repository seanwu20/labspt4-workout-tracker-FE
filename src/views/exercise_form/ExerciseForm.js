import React, { useState, useEffect } from "react";
import ExerciseCardioForm from "./ExerciseCardioForm";
import ExerciseWeightliftingForm from "./ExerciseWeightliftingForm";
import DatePicker from "./DatePicker";
import styled from "styled-components";
import { useContext } from 'react'
import WorkoutDataContext from "../../global/WorkoutDataContext"

const ExerciseForm = (props) => {
  //exercise info
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const exerciseType = props.match.params.exercise



  //set data
  const [set, setSet] = useState([]);


  //Event handler functions
  const backHandler = event => {
    event.preventDefault();
    props.history.push('/exercise-form')
  };

  const workoutContext = useContext(WorkoutDataContext)

  // Will submit data to somewhere
  const submitHandler = e => {

    e.preventDefault()
    workoutContext.setWorkoutData([...workoutContext.workoutData, { set, date, name }])
    props.history.push('/')

  };


  // Used to keep track of new exercise or new exercise
  const [edit, setEdit] = useState(false)



  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <ButtonDiv>
          <BackInput type="button" value="< Back" onClick={backHandler} />

          <SubmitInput type="submit" />
        </ButtonDiv>

        <Header>NAME OF EXERCISE:</Header>

        <Div>
          <ExerciseInput
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </Div>

        <DateDiv>
          <Text>Date</Text>
          <DatePicker date={date} setDate={setDate} />
        </DateDiv>

        <Div>
          {exerciseType === "cardio" ?
            <ExerciseCardioForm
              submitHandler={submitHandler}
              set={set}
              setSet={setSet}
            />
            :
            <ExerciseWeightliftingForm
              submitHandler={submitHandler}
              set={set}
              setSet={setSet}
            />
          }
        </Div>
      </Form>
    </Container>
  );
};


const Container = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Div = styled.div`
  /* height: 30px; */
  margin-bottom: 20px;
`;

const DateDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(225, 233, 241, 0.1);
`;
const ButtonDiv = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
const BackInput = styled.input`
  background: none;
  border: none;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  color: #03a3f3;
  opacity: 0.7;
  cursor: pointer;
`;
const ExerciseInput = styled.input`
  width: 600px;
  height: 40px;
  background: none;
  border: none;
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
  font-family: Roboto Condensed;
  font-size: 18px;
  font-weight: 200;
  @media (max-width: 600px) {
    width: 300px;
  }
`;
const SubmitInput = styled.input`
  /* background: rgba(255, 255, 255, 0.1);
  border-radius: 2px; */
  background: none;
  color: #ffffff;
  font-family: Roboto Condensed;
  font-size: 16px;
  font-weight: bold;
  line-height: 23px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`;
const Header = styled.h1`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const Text = styled.h3`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.5;
`;

const Form = styled.form``;

const mapStateToProps = state => {
  return {
    exerciseData: state.exerciseData
  }
};


export default ExerciseForm;
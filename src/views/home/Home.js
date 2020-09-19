import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "./Calendar.css";
import { useState } from 'react'
import { Link } from "react-router-dom";

const Home = props => {


  const [curDate, setCurDate] = useState(new Date())
  const changeDate = (date) => {
    setCurDate(date)
  }



  return (
    <HomeDiv>
      <Calendar value={curDate} onChange={date => changeDate(date)} />
      {props.workoutData.filter(setData => setData.date.getDate() === curDate.getDate()).map( (setData, index) => {
        return (
          <div key={index}>
            <p>{setData.name}</p>
            <Link to={{ pathname: `/exercise-form/${setData.exerciseType}`, state:setData }}>
              <div>Edit</div>
            </Link>
            {setData.exerciseType === "weightlifting" ?
              setData.set.map((set, index) => <h1 key={index}>{set.weight} {set.weight_unit}, {set.reps} reps </h1>) :
              setData.set.map((set, index) => <h1 key={index}>{set.time} {set.time_unit}, {set.distance} {set.distance_unit}</h1>)}
          </div>
        )
      })}

    </HomeDiv>
  )
}


const HomeDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 40px 0;
  @media (max-width: 1040px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Home
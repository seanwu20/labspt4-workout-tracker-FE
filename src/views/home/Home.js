import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "./Calendar.css";
import { useState, useContext } from 'react'

const Home = props => {


  const [curDate, setCurDate] = useState(new Date())
  const changeDate = (date) => {
    setCurDate(date)
  }


  props.workoutData.map(set => {
    console.log(set.date.getDate())
    console.log(curDate.getDate())
  })


  return (
    <HomeDiv>
      <Calendar value={curDate} onChange={date => changeDate(date)} />
      {props.workoutData.filter(oneSet => oneSet.date.getDate() === curDate.getDate()).map(oneSet => {
        console.log("FILTERED SETS", oneSet)
        return(
          <div>
            <p>{oneSet.name}</p>
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
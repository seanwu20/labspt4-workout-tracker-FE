import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "./Calendar.css";

 const Home = Home => {
    return (
        <Container>  
            <Calendar/>
        </Container>
    )
 }


const Container = styled.div`
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
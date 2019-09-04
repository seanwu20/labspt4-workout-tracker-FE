import React from "react";
import styled from "styled-components";

// PROPS:
// color (default: white)
// background (default: #03A3F3)
// width 
// text
// onClick
// alt
// icon (for src attribute)

export default function Button(props) {
    return (
        <StyledButton onClick={props.onClick} background={props.background} color={props.color}>
            {props.text}
        </StyledButton>
    )
};

const StyledButton = styled.button`
    background: ${props => props.background || "#2367FF"};
    color: ${props => props.color || "#FFFFFF"};
    font-size: 18px;
    line-height: 23px;
    font-family: "aktiv-grotesk-condensed",sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    border-radius: 2px;
    padding: ${props => props.padding || "7px 15px"};
    min-width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: #03A3F3;
    }
    &:focus, &:active {
        outline: none;
    };
`;
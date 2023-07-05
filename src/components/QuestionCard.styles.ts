import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export const Wrapper = styled.div `
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    margin: auto;
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};

export const ButtonWrapper=styled.div<ButtonWrapperProps> `
    button {
        cursor: pointer;
        user-select: none;
        font-size: 0%.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({correct, userClicked}) => 
            correct 
            ? 'red' : !correct && 
            userClicked ? 'gray' : 'White'
        };
        box-shadow: 1px 2px ;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    }

`
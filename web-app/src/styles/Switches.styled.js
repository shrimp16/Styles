import styled from 'styled-components';

export const SquaredSwitch = styled.label`
    position: relative;
    display: inline-block;
    width: 3rem;
    height: 1.6rem;
    margin: 0 10px;

    input {
        display: none;
    }

    span {
        position: absolute;
        cursor: pointer;
        top: 0; 
        left: 0; 
        right: 0; 
        bottom: 0;
        background-color: white;
        transition: 0.5s;
        border: 2px black solid;
        border-radius: 5px;

        &::before {
            position: absolute;
            content: '';
            height: 1rem;
            width: 1rem;
            left: 5px;
            bottom: 3px;
            background-color: black;
            transition: 0.5s;
            border-radius: 5px;
        }
    }

    input:checked {
        + span {
            background-color: black;
        }

        + span::before {
            background-color: white;
            transform: translateX(1.1rem);
        }
    }
`
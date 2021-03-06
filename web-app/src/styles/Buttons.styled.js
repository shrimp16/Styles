import styled from 'styled-components';

export const SimpleButton = styled.button`
    height: 3rem;
    width: 10rem;
    border: 2px ${props => `rgba(${props.color}, 1)`} solid;
    border-radius: 5px;
    background-color: ${props => `rgba(${props.color}, 0.3)`};
    cursor: pointer;
    transition: 0.6s;

    &:hover {
        background-color: ${props => `rgba(${props.color}, 1)`};
        color: white;
    }
`

export const GlowingButton = styled.button`
    height: 3rem;
    width: 10rem;
    border: 2px ${props => `rgba(${props.color}, 1)`} solid;
    border-radius: 5px;
    background-color: ${props => `rgba(${props.color}, 0.3)`};
    box-shadow: 0px 0px 5px ${props => `rgba(${props.color}, 1)`};
    transition: 0.6s;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: ${props => `rgba(${props.color}, 1)`};
        box-shadow: 0px 0px 20px ${props => `rgba(${props.color}, 1)`};
    }

`

export const FillButton = styled.button`
    height: 3rem;
    width: 10rem;
    background-color: white;
    border: 2px ${props => `rgba(${props.color}, 1)`} solid;
    border-radius: 5px;
    transition: 0.6s;
    cursor: pointer;

    &:hover {
        box-shadow: inset 0px 80px 0px ${props => `rgba(${props.color}, 1)`};
        color: white;
    }
`

export const ClickButton = styled.button`
    height: 3rem;
    width: 10rem;
    border: 2px ${props => `rgba(${props.color}, 1)`} solid;
    border-radius: 5px;
    outline: none;
    box-shadow: 0 9px ${props => `rgba(${props.color}, 0.5)`};
    background-color: ${props => `rgba(${props.color}, 0.3)`};
    transition: 0.3s;
    cursor: pointer;

    &:active {
        color: white;
        background-color: ${props => `rgba(${props.color}, 1)`};
        box-shadow: 0 5px ${props => `rgba(${props.color}, 0.25)`};
        transform: translateY(4px);
    }
`
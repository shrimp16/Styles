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
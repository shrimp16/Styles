import styled from 'styled-components';

export const SimpleButton = styled.button`
    height: 3rem;
    width: 10rem;
    border: 3px ${props => `rgba(${props.color}, 1)`};
    border-radius: 5px;
    background-color: ${props => `rgba(${props.color}, 0.3)`};
    cursor: pointer;
    transition: 0.6s;

    &:hover {
        background-color: ${props => `rgba(${props.color}, 1)`};
        color: white;
    }
`
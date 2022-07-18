import styled from 'styled-components';

export const SimpleButton = styled.button`
    color: ${props => `rgba(${props.color}, 1)`};
    background-color: ${props => `rgba(${props.color}, 0.3)`};
`
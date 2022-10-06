import styled from 'styled-components';

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    margin: auto;

    * {
        margin: 5px;
    }
`

export const FOFContainer = styled.div`
    position: relative;
    height: 10rem;
    width: 20rem;
    margin: auto;

    h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -150%);
    }

    h3 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`   
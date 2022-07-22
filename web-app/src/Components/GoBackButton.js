import { ButtonsContainer } from '../styles/Containers.styled';
import { FillButton } from '../styles/Buttons.styled';

export function GoBackButton() {
    return (
        <>
            <ButtonsContainer>
                <FillButton color="0, 0, 0" onClick={() => window.location.pathname = '/'}>Go Back</FillButton>
            </ButtonsContainer>
        </>
    )
}
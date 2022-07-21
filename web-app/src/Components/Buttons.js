import { SimpleButton, GlowingButton } from '../styles/Buttons.styled';
import { ButtonsContainer } from '../styles/Containers.styled';
import { SubHeader, HomeHeader } from '../styles/Headers.styled';

export function Buttons() {

    function test() {
        console.log(SimpleButton.componentStyle.rules);
        console.table(SimpleButton.componentStyle.rules);

        navigator.clipboard.writeText(SimpleButton.componentStyle.rules);
    }

    return (
        <>
            <HomeHeader>Buttons</HomeHeader>
            <SubHeader>Simple Buttons</SubHeader>
            <ButtonsContainer>
                <SimpleButton onClick={test} color="0, 0, 0">Simple Button</SimpleButton>
                <SimpleButton color="255, 0, 0">Red Simple Button</SimpleButton>
                <SimpleButton color="0, 255, 0">Green Simple Button</SimpleButton>
                <SimpleButton color="0, 0, 255">Blue Simple Button</SimpleButton>
                <SimpleButton color="255, 145, 0">Orange Simple Button</SimpleButton>
                <SimpleButton color="138, 43, 226">Purple Simple Button</SimpleButton>
            </ButtonsContainer>
            <SubHeader>Glowing Buttons</SubHeader>
            <ButtonsContainer>
                <GlowingButton color="0, 0, 0">Glowing Button</GlowingButton>
            </ButtonsContainer>
        </>
    )
}
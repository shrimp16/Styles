import { SimpleButton, GlowingButton, FillButton, ClickButton } from '../styles/Buttons.styled';
import { ButtonsContainer } from '../styles/Containers.styled';
import { SubHeader, HomeHeader } from '../styles/Headers.styled';
import { GoBackButton } from './GoBackButton';

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
                <GlowingButton color="255, 0, 0">Red Glowing Button</GlowingButton>
                <GlowingButton color="0, 255, 0">Green Glowing Button</GlowingButton>
                <GlowingButton color="0, 0, 255">Blue Glowing Button</GlowingButton>
                <GlowingButton color="255, 145, 0">Orange Glowing Button</GlowingButton>
                <GlowingButton color="138, 43, 226">Purple Glowing Button</GlowingButton>
            </ButtonsContainer>
            <SubHeader>Fill Buttons</SubHeader>
            <ButtonsContainer>
                <FillButton color="0, 0, 0">Fill Button</FillButton>
                <FillButton color="255, 0, 0">Red Fill Button</FillButton>
                <FillButton color="0, 255, 0">Green Fill Button</FillButton>
                <FillButton color="0, 0, 255">Blue Fill Button</FillButton>
                <FillButton color="255, 145, 0">Orange Fill Button</FillButton>
                <FillButton color="138, 43, 226">Purple Fill Button</FillButton>
            </ButtonsContainer>
            <SubHeader>Click Buttons</SubHeader>
            <ButtonsContainer>
                <ClickButton color="0, 0, 0">Click Button</ClickButton>
                <ClickButton color="255, 0, 0">Red Click Button</ClickButton>
                <ClickButton color="0, 255, 0">Green Click Button</ClickButton>
                <ClickButton color="0, 0, 255">Blue Click Button</ClickButton>
                <ClickButton color="255, 145, 0">Orange Click Button</ClickButton>
                <ClickButton color="138, 43, 226">Purple Click Button</ClickButton>
            </ButtonsContainer>
            <br></br>
            <GoBackButton />
        </>
    )
}
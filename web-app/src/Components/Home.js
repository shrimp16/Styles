import { HomeButtonsContainer } from "../styles/Home.styled"
import { SimpleButton } from "../styles/Buttons.styled"
import { HomeHeader } from "../styles/Headers.styled"

export function Home(){
    return (
        <>
            <HomeHeader>Shrimp Styles</HomeHeader>
            <HomeButtonsContainer>
                <SimpleButton color="0, 0, 0">Borders</SimpleButton>
                <SimpleButton color="0, 0, 0">Buttons</SimpleButton>
                <SimpleButton color="0, 0, 0">Headers</SimpleButton>
                <SimpleButton color="0, 0, 0">Icons</SimpleButton>
                <SimpleButton color="0, 0, 0">Images</SimpleButton>
                <SimpleButton color="0, 0, 0">Switches</SimpleButton>
            </HomeButtonsContainer>
        </>
    )
}
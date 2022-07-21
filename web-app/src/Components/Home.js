import { HomeButtonsContainer } from "../styles/Home.styled"
import { SimpleButton } from "../styles/Buttons.styled"
import { HomeHeader } from "../styles/Headers.styled"

export function Home(){

    function goTo(page){
        window.location.pathname = `/${page}`;
    }

    return (
        <>
            <HomeHeader>Shrimp Styles</HomeHeader>
            <HomeButtonsContainer>
                <SimpleButton onClick={() => goTo("borders")} color="0, 0, 0">Borders</SimpleButton>
                <SimpleButton onClick={() => goTo("buttons")} color="0, 0, 0">Buttons</SimpleButton>
                <SimpleButton onClick={() => goTo("headers")} color="0, 0, 0">Headers</SimpleButton>
                <SimpleButton onClick={() => goTo("icons")} color="0, 0, 0">Icons</SimpleButton>
                <SimpleButton onClick={() => goTo("images")} color="0, 0, 0">Images</SimpleButton>
                <SimpleButton onClick={() => goTo("switches")} color="0, 0, 0">Switches</SimpleButton>
                <SimpleButton onClick={() => goTo("guide")} color="0, 0, 0">Guide</SimpleButton>
            </HomeButtonsContainer>
        </>
    )
}
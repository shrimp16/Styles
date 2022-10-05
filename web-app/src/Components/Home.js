import { HomeButtonsContainer } from "../styles/Home.styled"
import { FillButton } from "../styles/Buttons.styled"
import { HomeHeader } from "../styles/Headers.styled"

export function Home(){

    function goTo(page){
        window.location.pathname = `/${page}`;
    }

    return (
        <>
            <HomeHeader>Shrimp Styles</HomeHeader>
            <HomeButtonsContainer>
                <FillButton onClick={() => goTo("borders")} color="0, 0, 0">Borders</FillButton>
                <FillButton onClick={() => goTo("buttons")} color="0, 0, 0">Buttons</FillButton>
                <FillButton onClick={() => goTo("headers")} color="0, 0, 0">Headers</FillButton>
                <FillButton onClick={() => goTo("icons")} color="0, 0, 0">Icons</FillButton>
                <FillButton onClick={() => goTo("images")} color="0, 0, 0">Images</FillButton>
                <FillButton onClick={() => goTo("switches")} color="0, 0, 0">Switches</FillButton>
                <FillButton onClick={() => goTo("404-example")} color="0, 0, 0">404</FillButton>
                <FillButton onClick={() => goTo("guide")} color="0, 0, 0">Guide</FillButton>
            </HomeButtonsContainer>
        </>
    )
}
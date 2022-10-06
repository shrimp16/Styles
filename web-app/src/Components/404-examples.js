import { GoBackButton } from "./GoBackButton"
import { FOFContainer } from "../styles/Containers.styled"

export function FourOFour() {
    return (
        <>
            <FOFContainer>
                <h1>404:</h1>
                <h3>NOT FOUND</h3>
            </FOFContainer>
            <GoBackButton />
        </>
    )
}
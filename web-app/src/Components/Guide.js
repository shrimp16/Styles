import { GoBackButton } from "./GoBackButton"

export function Guide() {
    return (
        <>
            <p>Welcome to Shrimp Styles</p>
            <br></br>
            <p>This is a simple web application with examples of styled html elements</p>
            <p>To get the css code just click on any element and it will copy it to your clipboard</p>
            <p>The styles are written in Styled Components, using a Sass syntax so you will have to make some changes, unless you want to use it with the Styled Components library</p>
            <GoBackButton />
        </>
    )
}
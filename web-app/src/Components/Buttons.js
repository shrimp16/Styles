import { SimpleButton } from '../styles/Buttons.styled';

export function Buttons() {

    function test(){
        console.log(SimpleButton.componentStyle.rules);
        console.table(SimpleButton.componentStyle.rules);
        
        navigator.clipboard.writeText(SimpleButton.componentStyle.rules);
    }

    return (
        <>
            <SimpleButton onClick={test} color="0, 0, 0">Basic Button</SimpleButton>
            <SimpleButton color="255, 0, 0">Red Basic Button</SimpleButton>
        </>
    )
}
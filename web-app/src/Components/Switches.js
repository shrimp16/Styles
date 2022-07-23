import { GoBackButton } from "./GoBackButton";

import { SquaredSwitch } from '../styles/Switches.styled';

export function Switches(){
    return (
        <>
            <SquaredSwitch>
                <input type="checkbox"></input>
                <span></span>
            </SquaredSwitch>
            <GoBackButton />
        </>
    )
}
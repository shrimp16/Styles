import { GoBackButton } from "./GoBackButton";

import { SquaredSwitch } from '../styles/Switches.styled';

export function Switches() {
    return (
        <>
            <SquaredSwitch color="00, 0, 0">
                <input type="checkbox"></input>
                <span></span>
            </SquaredSwitch>
            <GoBackButton />
        </>
    )
}
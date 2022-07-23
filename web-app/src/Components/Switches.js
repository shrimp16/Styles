import { GoBackButton } from "./GoBackButton";

import { SquaredSwitch } from '../styles/Switches.styled';

export function Switches() {
    return (
        <>
            <SquaredSwitch color="0, 0, 0">
                <input type="checkbox"></input>
                <span></span>
            </SquaredSwitch>
            <SquaredSwitch color="255, 0, 0">
                <input type="checkbox"></input>
                <span></span>
            </SquaredSwitch>
            <SquaredSwitch color="0, 255, 0">
                <input type="checkbox"></input>
                <span></span>
            </SquaredSwitch>
            <SquaredSwitch color="0, 0, 255">
                <input type="checkbox"></input>
                <span></span>
            </SquaredSwitch>
            <SquaredSwitch color="255, 145, 0">
                <input type="checkbox"></input>
                <span></span>
            </SquaredSwitch>
            <SquaredSwitch color="138, 43, 226">
                <input type="checkbox"></input>
                <span></span>
            </SquaredSwitch>
            <GoBackButton />
        </>
    )
}
import {useUser} from "../ts/provider-context.ts";
import {UserNameEntry} from "./name-entry.tsx";
import {Gameboard} from "./gameboard.tsx";

export const Game = () => {

    const {isNameSet} = useUser()

    return (
        <>
            {!isNameSet ? <UserNameEntry/> : <Gameboard/>}
        </>
    )
}
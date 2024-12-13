import {useUser} from "../ts/provider-context.ts";
import {UserNameEntry} from "./name-entry.tsx";

export const Game = () => {

    const {isNameSet} = useUser()

    return (
        <>
            {!isNameSet && <UserNameEntry/>}
        </>
    )
}
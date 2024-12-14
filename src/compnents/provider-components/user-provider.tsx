import {UserProviderContext} from "../../ts/provider-context.ts";
import {ReactNode, useState} from "react";
import {createGameboard} from "../../ts/functions.ts";

export const UserProvider = ({children}: {children: ReactNode}) => {
    const [name, setName] = useState('');
    const [isNameSet, setIsNameSet] = useState(false);
    const [gameboard, setGameboard] = useState(createGameboard())
  console.log(gameboard);

    return (
        <UserProviderContext.Provider
            value={{
                name,
                setName,
                isNameSet,
                setIsNameSet,
              gameboard,
              setGameboard
            }}
        >
            {children}
        </UserProviderContext.Provider>
    )
}
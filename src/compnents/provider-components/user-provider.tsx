import {UserProviderContext} from "../../ts/provider-context.ts";
import {ReactNode, useState} from "react";

export const UserProvider = ({children}: {children: ReactNode}) => {
    const [name, setName] = useState('');
    const [isNameSet, setIsNameSet] = useState(false);

    return (
        <UserProviderContext.Provider
            value={{
                name,
                setName,
                isNameSet,
                setIsNameSet,
            }}
        >
            {children}
        </UserProviderContext.Provider>
    )
}
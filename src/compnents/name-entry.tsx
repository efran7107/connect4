import {useUser} from "../ts/provider-context.ts";
import '../styles/name-entry.css'
import {useState} from "react";

export const UserNameEntry = () => {

    const {name, setName, setIsNameSet} = useUser();
    const [isFirstAttempt, setIsFirstAttempt] = useState(false);
    const startGame = () => {
        if(name.trim().length < 2){
            setIsFirstAttempt(true);
            return;
        }
        setIsFirstAttempt(false);
        setIsNameSet(true);
    }

    return(
        <div className="name-entry-cont">
            <p>Please enter a name to begin playing: </p>
            <div className="name-entry">
                <label htmlFor="name">User Name: </label>
                <input
                    type="text"
                    value={name}
                    className="user-name"
                    onChange={(e) => setName(e.target.value)}
                />
                {isFirstAttempt && <p>Please enter a name more than two characters to begin</p>}
                <input type="submit" onClick={startGame} />
            </div>
        </div>
    )
}
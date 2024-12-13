import { useUser } from "../ts/provider-context.ts";
import "../styles/name-entry.css";
import { ChangeEvent, useState } from "react";
import { validations } from "../ts/validations.ts";

export const UserNameEntry = () => {
  const { name, setName, setIsNameSet } = useUser();
  const [isFirstAttempt, setIsFirstAttempt] = useState(false);
  const startGame = () => {
    if (name.trim().length < 2) {
      setIsFirstAttempt(true);
      return;
    }
    setIsFirstAttempt(false);
    setIsNameSet(true);
  };

  const setValidName = (e: ChangeEvent<HTMLInputElement>) => {
    const newName = e.currentTarget.value;
    if (!validations.isAName(newName)) {
      setName(newName);
      return;
    }
    setName(name);
  };

  return (
    <div className="name-entry-cont">
      <p>Please enter a name to begin playing: </p>
      <div className="name-entry">
        <label htmlFor="name">User Name:</label>
        <input
          type="text"
          value={name}
          onChange={setValidName}
        />
        {isFirstAttempt && (
          <p>Please enter a name more than two characters to begin</p>
        )}
        <input type="submit" onClick={startGame} />
      </div>
    </div>
  );
};

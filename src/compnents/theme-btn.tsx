import {useState} from "react";
import {useTheme} from "../ts/provider-context.ts";
import '../styles/theme-container-style.css'


export const ThemeBtn = () => {

    const {theme, setTheme} = useTheme();
    const [isActive, setIsActive] = useState(false);
    const left = 'fa-caret-left';
    const right = 'fa-caret-right';

    const changeActivity = () => {
        if(isActive) setIsActive(false)
        else setIsActive(true)
    }

    return (
        <div className={`theme-tab-cont ${isActive ? 'active' : ''}`}>
            <div className="tab-cont" onClick={changeActivity}>
                <i className={`fa-solid ${!isActive ? left : right}`}></i>
            </div>
            <div className="theme-cont">
                <h6>Change Theme</h6>
                <div className= 'theme-btn-container'>
                    <input
                        type='button'
                        value='Dark'
                        className={`dark-btn ${theme === 'dark' ? 'active' : ''}`}
                        onClick={() => setTheme('dark')}
                    />
                    <input
                        type='button'
                        value='Light'
                        className={`light-btn ${theme === 'light' ? 'active' : ''}`}
                        onClick={() => setTheme('light')}
                    />
                </div>
            </div>
        </div>
    )
}
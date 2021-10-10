import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { setTheme } from '../utils/settheme';
import HandleEnterKey from '../utils/HandleEnterKey';

const ThemeSwitchWrap = styled.nav`
cursor: pointer;

.toggle--checkbox {
    position: absolute;
    opacity: 0;
    visibility: hidden;
}

.toggle--label {
    display: inline-block;
    background-color: #6b7abb;
    height:30px;
    width:60px;
    border-radius:50px;
    cursor: pointer;
    position: relative;
    transition: all ease 0.3s;

    &:before {
        content:'';
        height: 16px;
        width: 16px;
        border-radius:50%;
        background-color: #f2f2f2;
        border: 2px solid transparent;
        position: absolute;
        left: 5px;
        top: 5px;
        display: block;
        transition: all ease 0.3s;
    }

    .toggle--label-background {
        
        &:after{
            content: "";
            height: 4px;
            width: 4px;
            background-color: #f2f2f2;
            border-radius: 100%;
            position: absolute;
            left: 45px;
            top: 10px;
        }
        &:before {
            content: "";
            height: 4px;
            width: 4px;
            background-color: #f2f2f2;
            border-radius: 100%;
            position: absolute;
            left: 35px;
            top: 18px;
        }
        
    }

}

.toggle--checkbox:checked + .toggle--label{
    background-color: #96dcee;

    &:before {
        background-color: #f5eb71;
        left: 35px;
        border-color: #f3e651;
    }

    .toggle--label-background {
        &:after{
            content: "";
            height: 4px;
            width: 16px;
            background-color: #f2f2f2;
            border-radius: 5px;
            position: absolute;
            left: 10px;
            top: 10px;
        }
        &:before {
            content: "";
            height: 4px;
            width: 17px;
            background-color: #f2f2f2;
            border-radius: 5px;
            position: absolute;
            left: 13px;
            top: 16px;
        }
        
    }

}

@media screen and (max-width: 768px) {
    position: absolute;
    right: -26px;
    top: 50%;
    transform: translateY(-50%);
}
`

const ThemeSwitch = () => {
    const [togClass, setToggleClass] = useState('dark');
    let theme = localStorage.getItem('theme');
    const SwitchTheme = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setToggleClass('light')
        } else {
            setTheme('theme-dark');
            setToggleClass('dark')
        }
    }

    useEffect( () => {
        if (localStorage.getItem('theme') === 'theme-light') {
            setToggleClass('light')
            setTheme('theme-light');
        } else {
            setToggleClass('dark')
            setTheme('theme-dark');
        }
    }, [theme]);

    return(
        <ThemeSwitchWrap>
            {
                <input type="checkbox" id="toggle" className="toggle--checkbox" onChange={SwitchTheme} checked={togClass === "light" ? 'checked' : ''}  />
            }
            <label htmlFor="toggle" className="toggle--label" tabIndex="0" onKeyUp={ (event) => HandleEnterKey(event, () => SwitchTheme())}>
                <span className="toggle--label-background"></span>
            </label>
        </ThemeSwitchWrap>
    )
}

export default ThemeSwitch;
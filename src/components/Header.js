import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

import GlobalStyle from '../globalStyles';
import { setTheme } from '../utils/settheme';

import UserBlock from './UserBlock';

const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-flow: column;
    text-align: center;
    position: relative;
  }
`

const HeaderSection = styled.header`
  padding: 15px;

  &.nav_is_open {

    .user-navigation,
    .navigation {
        right: 0;
    }

  } 
`

const Logo = styled.div`
    max-width:170px;
    min-width: 170px;

    img {
        max-width:100%;
        height: auto;
        float: left;
    }

    a {
        text-decoration: none;
        font-size: 26px;
        font-weight: 900;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        max-width: initial;
        text-align: center;
    }
`
const Nav = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex: 0 0 auto;
    
    ul {
         margin: 0;
         padding: 0;
    }

    li {
        list-style: none;
        display: inline-block;
        margin: 0 0 0 10px;
    }

    a {
        font-size: 14px;
        color: #f53838;
        font-weight: 600;
        text-decoration: none;
        padding: 5px 8px;
        display: inline-block;
        text-transform: uppercase;
    }

    .exit-button {
        color: #fff;
        background-color: #f53838;
        font-weight: 700;
        padding: 6px 20px;
        min-width: 100px;
        border: 1px solid #f53838;
        border-radius: 25px;
        cursor: pointer;
        -webkit-transition: all ease 0.3s;
        transition: all ease 0.3s;
        text-align: center;
        display:none;
    }

    @media screen and (max-width: 768px) {

        &.navigation {
            position: fixed;
            right: -240px;
            top: 0;
            bottom: 0;
            width: 240px;
            background-color: var(--main-bg-color);
            z-index: 1;
            align-items: flex-start;
            transition: all ease 0.3s;

            ul {
                width: 100%;
            }
            
            li {
                width: 100%;
                text-align: left;
                margin: 0;

                a {
                    width: 100%;
                    padding: 15px 10px;
                    border-bottom: 1px solid var(--secondary-bg-color);
                }
            }
        }

        &.user-navigation {
            position: fixed;
            bottom: 0;
            right: -240px;
            z-index: 1;
            width: 240px;
            transition: all ease 0.3s;
            padding: 15px 0;
            border-top: 1px solid var(--secondary-bg-color);
        }
    }
`

const ThemeSwitch = styled.nav`
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
const DeviceMenu = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 23px;
    width: 28px;
    display: block;
    cursor: pointer;
    display: none;

    span {
        position: absolute;
        top: 0;
        left: 0;
        height: 3px;
        width: 28px;
        background-color: var(--main-text-color);

        :before,
        :after {
            content:'';
            position: absolute;
            top: 10px;
            left: 0;
            height: 3px;
            width: 28px;
            background-color: var(--main-text-color);
        }

        :before {
            top: 20px;
        }

    }

    @media (max-width: 768px) {
        display: block;
    }
`
    

    

const Header = () => {
    const [togClass, setToggleClass] = React.useState('dark');
    const [mobileNav, setmobileNav] = React.useState(false);
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

    React.useEffect( () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setToggleClass('dark')
            setTheme('theme-dark');
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setToggleClass('light')
            setTheme('theme-light');
        }
    }, [theme])

    return (
        <div className="wrapper">
            <HeaderSection className={mobileNav ? 'nav_is_open' : ''}>
                <>
                    <GlobalStyle/ >
                    <HeadWrapper>
                        <Logo>
                            <Link to='/'>
                                AtoZ Quiz
                            </Link>
                        </Logo>

                        <Nav className='navigation'>
                            <ul>
                                <li> <Link to="/quizzes">Quiz types</Link> </li>
                                <li> <a href="/user">History</a> </li>
                                <li> <Link to="/credits">Credits</Link> </li>
                            </ul>
                        </Nav>

                        <DeviceMenu onClick={() => (setmobileNav(!mobileNav))}>
                            <span></span>
                        </DeviceMenu>

                        <Nav className="user-navigation">
                            <ul>
                                <li>
                                    <UserBlock />
                                 </li>
                            </ul>
                        </Nav>

                        <ThemeSwitch>
                            {
                                <input type="checkbox" id="toggle" className="toggle--checkbox" onChange={SwitchTheme} checked={togClass === "light" ? 'checked' : ''}  />
                            }
                            <label htmlFor="toggle" className="toggle--label">
                                <span className="toggle--label-background"></span>
                            </label>
                        </ThemeSwitch>

                    </HeadWrapper>
                </>
            </HeaderSection>
        </div>
    )
}

export default Header;
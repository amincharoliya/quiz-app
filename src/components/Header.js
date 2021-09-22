import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import GlobalStyle from '../globalStyles';
import { setTheme } from '../utils/settheme';

const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 620px) {
    flex-flow: column;
    text-align: center;
    position: relative;
  }
`

const HeaderSection = styled.header`
  padding: 15px;
`

const Logo = styled.div`
    max-width:200px;
    min-width: 200px;

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

    @media screen and (max-width: 620px) {
        width: 100%;
        max-width: initial;
        text-align: center;
        margin-bottom: 10px;
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

    @media screen and (max-width: 620px) {
        position: absolute;
        right: -28px;
        bottom: -5px;
    }
`

const Header = (props) => {
    if( props.history && props.history.location.pathname.includes(':') ) {
        var CustomURL = props.history.location.pathname.split(':')[0].replace('/','');
    }

    const [togClass, setToggleClass] = React.useState('dark');
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
            <HeaderSection>
                <>
                    <GlobalStyle/ >
                    <HeadWrapper>
                        <Logo>
                            <Link to='/'>
                                AtoZ Quiz
                            </Link>
                        </Logo>

                        <Nav>
                            <ul>
                                <li> <a href="/quizzes">Quiz types</a> </li>
                                <li> <a href="/credits">Credits</a> </li>
                            </ul>
                        </Nav>

                        <ThemeSwitch>
                            {
                                togClass === "light" ?
                                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={SwitchTheme} checked />
                                :
                                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={SwitchTheme} />
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
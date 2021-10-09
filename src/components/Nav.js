import { Link } from 'react-router-dom';
import styled from 'styled-components';

import UserBlock from '../parts/UserBlock';

const NavWrap = styled.nav`
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

const Nav = ( { MobileNav, SetmobileNav } ) => {
    
    return(
        <>
            <NavWrap className='navigation'>
                <ul>
                    <li> <Link to="/quizzes">Quiz types</Link> </li>
                    <li> <a href="/user">History</a> </li>
                    <li> <Link to="/credits">Credits</Link> </li>
                </ul>
            </NavWrap>

            <DeviceMenu onClick={() => (SetmobileNav(!MobileNav))}>
                <span></span>
            </DeviceMenu>

            <NavWrap className="user-navigation">
                <ul>
                    <li>
                        <UserBlock />
                    </li>
                </ul>
            </NavWrap>
            </>
    )
}

export default Nav;
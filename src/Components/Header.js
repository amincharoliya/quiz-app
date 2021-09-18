import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import GlobalStyle from '../globalStyles';

const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 480px) {
    flex-flow: column;
    text-align: center;
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

    @media screen and (max-width: 480px) {
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
        color: #333;
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

const Header = (props) => {
    if( props.history && props.history.location.pathname.includes(':') ) {
        var CustomURL = props.history.location.pathname.split(':')[0].replace('/','');
    }
    return (
        <div className="wrapper">
            <HeaderSection>
                <>
                    <GlobalStyle/ >
                    <HeadWrapper>
                        <Logo>
                            <Link to='/'>
                                Coder's Quiz
                            </Link>
                        </Logo>

                        <Nav>
                            <ul>
                                <li> <a href="/quizzes">Quiz types</a> </li>
                                <li> <a href="/credits">Credits</a> </li>
                            </ul>
                        </Nav>

                    </HeadWrapper>
                </>
            </HeaderSection>
        </div>
    )
}


export default Header;
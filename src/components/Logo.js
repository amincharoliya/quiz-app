import { Link } from "react-router-dom";
import styled from 'styled-components'

const LogoWrap = styled.div`
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

const Logo = () => {
    return(
        <LogoWrap>
            <Link to='/'>
                AtoZ Quiz
            </Link>
        </LogoWrap>
    )
}

export default Logo;
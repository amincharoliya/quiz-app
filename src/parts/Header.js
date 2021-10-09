import { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from '../globalStyles';

import Logo from '../components/Logo';
import Nav from '../components/Nav';
import ThemeSwitch from '../components/ThemeSwitch';

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

const Header = () => {
    const [mobileNav, setmobileNav] = useState(false);
    return (
        <div className="wrapper">
            <HeaderSection className={mobileNav ? 'nav_is_open' : ''}>
                <>
                    <GlobalStyle/ >
                    <HeadWrapper>
                        <Logo />
                        <Nav MobileNav={mobileNav} SetmobileNav={ setmobileNav } />
                        <ThemeSwitch />
                    </HeadWrapper>
                </>
            </HeaderSection>
        </div>
    )
}

export default Header;
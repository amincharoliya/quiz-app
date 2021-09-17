import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.section`
  background-color: #fff;
  padding: 25px 0;
  text-align: center;

  p {
      margin: 0;
  }

  a {
      text-decoration: none;
  }
`
const Footer = () => {
    return (
        <FooterWrap>
            <div className="wrapper">
                <p>Developed with 💗 by <a href="https://www.amincharoliya.com" target="_blank" rel="noreferrer">Amin</a></p>
            </div>
        </FooterWrap>
    )
}


export default Footer;
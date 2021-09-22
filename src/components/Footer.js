import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.section`
  background-color: var(--secondary-bg-color);
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
                <p>Developed with 💗 by <a href="https://www.amincharoliya.com" target="_blank" rel="noreferrer">Amin</a>, Code on <a href="https://www.github.com/amincharoliya/quiz-app" target="_blank" >GitHub</a></p>
            </div>
        </FooterWrap>
    )
}


export default Footer;

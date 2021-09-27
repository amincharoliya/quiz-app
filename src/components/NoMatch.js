import React from 'react'
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';


const _404Page = styled.section`
    background-color: var(--main-bg-color);
    padding: 55px 15px;
    min-height: calc(100vh - 132px);
    display: flex;
    align-items: center;
    text-align: center;

    h1 {
        font-size: 34px;
        font-weight: 700;
        margin-bottom: 60px;
    }

    img {
        max-width: 650px;
        width: 90%;
        max-height: 450px;
    }
`

const NoMatch = () => {
    return (
        <>
        <Header />
            <_404Page>
                <div className="wrapper">
                    <h1>Page not found!</h1>
                    <img src='./images/404.svg' />
                </div>
            </_404Page>
            <Footer />
        </>
    )
}


export default NoMatch;
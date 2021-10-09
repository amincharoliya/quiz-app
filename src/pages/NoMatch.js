import React from 'react'
import styled from 'styled-components';

import Header from '../parts/Header';
import Footer from '../parts/Footer';


const Page404 = styled.section`
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
            <Page404>
                <div className="wrapper">
                    <h1>Page not found!</h1>
                    <img src='./images/404.svg' alt="404" />
                </div>
            </Page404>
            <Footer />
        </>
    )
}


export default NoMatch;
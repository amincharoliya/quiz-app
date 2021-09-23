import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  @media screen and (max-width:768px) {
      flex-flow: column;
      padding: 25px 0;
  }
`

const Column = styled.div`
    width: 50%;
    padding: 55px 15px;
    text-align: center;

     img {
         max-width: 80%;
     }

    @media screen and (max-width:768px) {
        padding: 25px 15px;
        width: 100%;
        order: 2;

        &:nth-child(2) {
            order: 1;
        }
    }
`

const Heading = styled.h1`
    font-size: 34px;
    font-weight: 700;
    letter-spacing: -1.2px;
    line-height: 1.6;
    text-align: left;
    margin-bottom: 25px;
    strong {
        font-weight: 900;
    }

    @media screen and (max-width:768px) {
      font-size: 28px;
    }
`
const CTA = styled.span`
    color: #fff !important;
    text-decoration: none;
    background-color: #f53838;
    border-radius: 5px;
    padding: 15px 20px;
    float: left;
    min-width: 140px;
    box-shadow: 0 5px 10px rgb(245 56 56 / 27%);
    transition: all ease 0.3s;

    &:hover {
        box-shadow: inset 0 0 100px rgba(0,0,0,0.2), 0 5px 10px rgb(245 56 56 / 27%);
    }
`

const HomeBanner = () => {
    return (
        <section className="wrapper">
            <Banner>
                <Column>
                    <Heading>
                        Brush up your knowledge<br/> by taking <strong> Quizzes</strong>
                    </Heading>
                    <Link to='/quizzes'>
                        <CTA href="/">AtoZ Quiz</CTA>
                    </Link>
                </Column>
                <Column>
                    <img src="./images/web-developer.png" alt="Quiz" />
                </Column>
            </Banner>
        </section>
    )
}


export default HomeBanner;
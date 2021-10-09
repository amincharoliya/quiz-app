import React from 'react';
import styled from 'styled-components';

import { connect } from "react-redux"

import Header from '../parts/Header';
import Footer from '../parts/Footer';
import AverageScore from '../components/AverageScore'
import QuizHistory from '../components/QuizHistory'
import Chart from '../components/Chart'

const Container = styled.section`
    background-color: var(--main-bg-color);
    padding: 55px 15px;
    min-height: calc(100vh - 132px);
    display: flex;

    h2 {
        font-size: 24px;
        text-align: center;
        margin-bottom: 40px;
    }

    main {
        display: flex;
        flex-flow: row;
        position: relative;

        @media screen and (max-width:920px) {
            flex-flow: column;
        }

    }
`

const QuizHistoryBlock = styled.div`
    margin-left: 25px;
    width: calc(100% - 275px);
    @media screen and (max-width:920px) {
        margin-left: 0;
        width: 100%;
    }
`

const AverageScoreWrap = styled.div`
    width: 250px;

    @media screen and (max-width:920px) {
        margin: 0 auto 35px;
        width: 100%;
    }
`

const UserPage = (props) => {
    const data = props.data;
    return(
        <>
            <Header />
            <Container>
                <div className="wrapper">
                    <h2>Recently Taken Quizzes</h2>
                    <Chart data={data} />
                    <main>
                        <AverageScoreWrap>
                            <AverageScore data={data} />
                        </AverageScoreWrap>
                        <QuizHistoryBlock>
                            <QuizHistory data={data} />
                        </QuizHistoryBlock>
                    </main>
                </div>
            </Container>
            <Footer/>
        </>
    )
}

const mapStateToProps = state => {
    return {
      data: state.data.quizzes.quizData,
    }
  }
 
export default connect(mapStateToProps)(UserPage)
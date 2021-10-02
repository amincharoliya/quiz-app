import React from 'react';
import styled from 'styled-components';

import Header from './Header'
import Footer from './Footer'
import QuizHistory from './QuizHistory'

const Container = styled.section`
    background-color: var(--main-bg-color);
    padding: 55px 15px;
    min-height: calc(100vh - 132px);
    display: flex;

    h2 {
        font-size: 24px;
        text-align: center;
    }

    main {
        display: flex;
        flex-flow: column;
    }
`

const QuizHistoryBlock = styled.div`
`

const UserPage = () => {

    return(
        <>
            <Header />
            <Container>
                <div className="wrapper">
                    <main>
                        <QuizHistoryBlock>
                            <h2>Recently Taken Quizzes</h2>
                            <QuizHistory />
                        </QuizHistoryBlock>
                    </main>
                </div>
            </Container>
            <Footer/>
        </>
    )
}

export default UserPage;
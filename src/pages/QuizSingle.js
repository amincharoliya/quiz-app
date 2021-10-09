import {useState} from 'react';
import styled from 'styled-components';

import Header from '../parts/Header';
import Footer from '../parts/Footer';
import QuizWelcomeScreen from '../components/QuizWelcomeScreen';
import QuizQuestionScreen from '../components/QuizQuestionScreen';

const QuizWrap = styled.div`
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -1.2px;
    line-height: 1.6;
    text-align: center;
    background-color: var(--main-bg-color);
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 132px);
    margin-bottom: 25px;
    padding: 25px 0;
    margin: 0;
`

const QuizSingle = (props) => {
    const [quizStarted, setQuizStarted] = useState(false);
    return(
        <>
            <Header history={props.history}/>
            <QuizWrap>
                <div className="wrapper">
                    {!quizStarted ?  <QuizWelcomeScreen quizType={props.history.location.pathname} setQuizStarted={setQuizStarted}/> : <QuizQuestionScreen category={props.history.location.pathname}/>}
                </div>
            </QuizWrap>
            <Footer />
        </>
    )
}

export default QuizSingle;
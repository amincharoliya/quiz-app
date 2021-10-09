import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { connect } from "react-redux"
import { additionQUIZ } from "../redux/Data/data.actions"

import categories from '../utils/categories';


const QuizQuestionsWrap = styled.div`
    text-align: center;
    background-color: var(--main-bg-color);
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 132px);
`

const QuizQuestion = styled.div`
    display: flex;
    flex-flow: column;
    background-color: var(--secondary-bg-color);
    border-radius: 4px;
    padding: 15px;

    .answer_block {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 0;
        flex-wrap: wrap;
    }
`

const QuizQuestionHeading = styled.h2`
    font-size: 28px;
    margin-bottom: 25px;
    text-align: center;

    @media screen and (max-width:560px) {
      font-size: 22px;
    }
`
const QuizQuestionOptionsWrap = styled.div`
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
`

const QuizQuestionOption = styled.button`
    width: 46%;
    margin: 0 2% 2%;
    border: 2px solid transparent;
    border-radius: 4px;
    transition: all ease 0.2s;
    cursor: pointer;
    background-color: var(--main-bg-color);
    color:  var(--main-text-color);
    padding: 10px 15px;
    font-size: 13px;
    white-space: pre-wrap;
    letter-spacing: 0;

    &:hover {
        border-color: var(--main-text-color);
    }

    @media screen and (max-width:560px) {
      width: 100%;
    }
`



const QuizQuestionScreen = (props) => {

    const category = props.category.split(':')[1];
    const [Questions, setQuestions] = useState([]);
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [hasError, setHasError] = useState(false);
    const [correctAnswer, setcorrectAnswer] = useState(0);
    const [resultScreen, setresultScreen] = useState(false);

    useEffect( ()=> {
        fetch( `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple` )
        .then( (res) => {
            if (!res.ok) {
                setHasError(true);
            }
            return res;
        })
        .then( (res) => res.json())
        .then( (data) => setQuestions(data.results))
        .catch((error) => {
            setHasError(true);
        });
    }, [category]);

    const selectAnswer = (answer) => {
        if( answer ===  Questions[currentQuestion].correct_answer) { //Increase if true
            setcorrectAnswer( correctAnswer + 1 );
        }
        setcurrentQuestion( currentQuestion + 1 ); //Increase counter for next question
        if( (currentQuestion+1) >= Questions.length ) { //If last question then show result screen
            setresultScreen(true);
            let quizzes = localStorage.getItem('quizzes');
            const date = new Date();
            const recentQuiz = {
                name: categories[Number(category)].title,
                score: correctAnswer,
                id: category,
                date: date.toLocaleDateString()
            }
            if( quizzes ){
                let quizzesParsed = JSON.parse(quizzes);
                if(quizzesParsed.length > 19){
                    quizzesParsed.shift();
                }
                quizzesParsed = [...quizzesParsed, {...recentQuiz}];
                localStorage.setItem('quizzes', JSON.stringify(quizzesParsed) );
                additionQUIZ(quizzesParsed);
            } else {
                let quizzesParsed = [recentQuiz];
                localStorage.setItem('quizzes', JSON.stringify(quizzesParsed));
                additionQUIZ(quizzesParsed)
            }

        }
    }

    if(hasError) {
        return(
            <p>It seems like we are unable to fetch questions for you. <span className="link" onClick={ (e)=>  ( window.location.reload() ) } >Retry again</span> or wait for  a while.</p>
        )
    }

    if(resultScreen) {
        return (
                <QuizQuestion>
                    <p className="answer_block">{`Correct Answers: ${correctAnswer} out of ${Questions.length}`} <button onClick={ () => window.location.reload() } className="button">Take Quiz again</button></p>
                </QuizQuestion>
            )
    }
    
     const answers = Questions.length ? [Questions[currentQuestion].correct_answer, ...Questions[currentQuestion].incorrect_answers].sort( () => Math.random() - 0.5) : ''; //Shuffle correct and other incorrect answers
    
    return(
        
        Questions.length > 0 ? (<QuizQuestionsWrap>
            <p>Question {currentQuestion+1}</p>
            <div className="wrapper">
                <QuizQuestion>
                    <QuizQuestionHeading dangerouslySetInnerHTML={{ __html: Questions[currentQuestion].question }}></QuizQuestionHeading>
                    <QuizQuestionOptionsWrap>
                        <QuizQuestionOption onClick={(e) => {selectAnswer(answers[0])}} dangerouslySetInnerHTML={{ __html: answers[0] }} />
                        <QuizQuestionOption onClick={(e) => {selectAnswer(answers[1])}} dangerouslySetInnerHTML={{ __html: answers[1] }} />
                        <QuizQuestionOption onClick={(e) => {selectAnswer(answers[2])}} dangerouslySetInnerHTML={{ __html: answers[2] }} />
                        <QuizQuestionOption onClick={(e) => {selectAnswer(answers[3])}} dangerouslySetInnerHTML={{ __html: answers[3] }} />
                    </QuizQuestionOptionsWrap>
                </QuizQuestion>
            </div>
        </QuizQuestionsWrap>) :
        (<p>Fetching questions...</p>)
    )

}

const mapStateToProps = state => {
    return {
      data: state.data,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        additionQUIZ: (payload) => dispatch(additionQUIZ(payload))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(QuizQuestionScreen)
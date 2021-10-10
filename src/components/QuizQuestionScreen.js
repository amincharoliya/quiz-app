import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux"

import { additionQUIZ } from "../redux/Data/data.actions"
import useLocalStorage  from '../utils/useLocalStorage';
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
    const [Questions, setQuestions] = useState('');
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [correctAnswer, setcorrectAnswer] = useState(0);
    const [status, setStatus] = useState('fetching');
    const [quizzes, setQuizzes] = useLocalStorage('quizzes', '', additionQUIZ);

    useEffect( ()=> {
        fetch( `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple` )
        .then( (res) => {
            if (!res.ok) {
                setStatus('error');
            }
            return res;
        })
        .then( (res) => res.json())
        .then( (data) => {
            setQuestions(data.results);
            setStatus('resolved');
        })
        .catch((error) => {
            setStatus('error');
        });
    }, [category]);

    useEffect( ()=> {
        if(!Questions){
            return;
        }
        if(currentQuestion >= Questions.length) { //If last question then save result into state and show result screen
            setStatus('quizEnded');
            const date = new Date();
            const recentQuiz = {
                name: categories[Number(category)].title,
                score: correctAnswer,
                id: category,
                date: date.toLocaleDateString()
            }
            if( quizzes !== '' ){ //Check if History has 15 attempts saved
                if(quizzes.length > 14){
                    quizzes.shift(); //Remove one older attempt and make it 15 only
                }
                let quizzesParsed = [...quizzes, {...recentQuiz}];
                setQuizzes(quizzesParsed);
            } else {
                let quizzesParsed = [recentQuiz];
                setQuizzes(quizzesParsed);
            }
        }
    },[currentQuestion]);

    const selectAnswer = (answer) => {
        setcurrentQuestion( currentQuestion + 1 ); //Increase counter for next question
        if( answer ===  Questions[currentQuestion].correct_answer) { //Increase if true
            setcorrectAnswer( correctAnswer + 1 );
        }
        const newIndex = currentQuestion + 1;
        if(newIndex >= Questions.length) {
            setStatus('quizEnded');
        }
    }

    if(status === 'fetching'){
        return <p>Fetching questions...</p>
    }

    if( status === 'error') {
        return(
            <p>It seems like we are unable to fetch questions for you. <span className="link" onClick={ (e)=>  ( window.location.reload() ) } >Retry again</span> or wait for  a while.</p>
        )
    }

    if( status === 'quizEnded') {
        return (
            <QuizQuestion>
                <p className="answer_block">{`Correct Answers: ${correctAnswer} out of ${Questions.length}`} <button onClick={ () => window.location.reload() } className="button">Take Quiz again</button></p>
            </QuizQuestion>
        )
    }

    if( status === 'resolved') {
        const answers = Questions ? [Questions[currentQuestion].correct_answer, ...Questions[currentQuestion].incorrect_answers].sort( () => Math.random() - 0.5) : ''; //Shuffle correct and other incorrect answers
        return(
            <QuizQuestionsWrap>
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
        </QuizQuestionsWrap>
        )
    }    
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
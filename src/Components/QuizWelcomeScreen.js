import styled from 'styled-components';
import categories from '../utils/Categories';

const QuizColumn = styled.div`
    background-color: #fff;
    padding: 15px;
    width: 50%;

    p {
        font-size: 18px;
        margin: 0;
        letter-spacing: 0.5px;
    }
`

const QuizDetails = styled.div`
    background-color: #fff;
    padding: 15px;
    display: flex;
    flex-flow: row;
    align-items: center;
    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    max-width: 80%;
    margin: auto;
`

const QuizWelcomeScreen = ({quizType,setQuizStarted}) => {
    const QuizNumber = quizType.split(':')[1];
    return(
        <>
            <h1 dangerouslySetInnerHTML={{__html:categories[Number(QuizNumber)].title}} />
            <QuizDetails>
                <QuizColumn>
                    <p>You will have 10 questions. Answer them one by one. Best of Luck!</p>
                </QuizColumn>
                <QuizColumn>
                    <button className="button" onClick={ () => setQuizStarted(true) }>Start Practicing</button>
                </QuizColumn>
            </QuizDetails>
        </>
    )
}

export default QuizWelcomeScreen;
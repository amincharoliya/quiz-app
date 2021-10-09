import { Link } from "react-router-dom";
import styled from 'styled-components';

import Button from '../components/Button';

const QuizItemWrap = styled.div`
    background-color: var(--secondary-bg-color);
    padding: 20px;
    text-align: center;
    border-radius: 4px;

    img {
        max-width: 100px;
        height: auto;
        margin-bottom: 20px;
    }

    h3 {
        font-size: 18px;
        min-height: 36px;
    }

    p {
        min-height: 68px;
    }

    .cta-button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
    }
`

const QuizItem = (props) => {
    return(
        <QuizItemWrap>
            <h3 dangerouslySetInnerHTML={{__html: props.title}} />
            <p dangerouslySetInnerHTML={{__html: props.description}} />
            <Link to={props.ctaLink} className="cta-button"><Button Label={props.ctaText ? props.ctaText : 'Take Quiz'} /></Link>
        </QuizItemWrap>
    )
}

export default QuizItem
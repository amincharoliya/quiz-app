import styled from 'styled-components';

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
        min-height: 48px;
    }

    .cta-button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f53838;
        padding: 10px 15px;
        color: #fff;
        text-decoration: none;
        transition: all ease 0.3s;
        max-width: 170px;
        margin: auto;
        border-radius: 5px;

        span {
            font-size: 24px;
            margin-left: 10px;
        }

        &:hover {
            box-shadow: inset 0 0 100px rgb(0 0 0 / 20%);
        }

    }
`

const QuizItem = (props) => {
    return(
        <QuizItemWrap>
            <h3 dangerouslySetInnerHTML={{__html: props.title}} />
            <p dangerouslySetInnerHTML={{__html: props.description}} />
            <a href={props.ctaLink} className="cta-button">Take Quiz <span>→</span></a>
        </QuizItemWrap>
    )
}

export default QuizItem
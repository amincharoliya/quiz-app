import styled from 'styled-components';

import QuizItem from './QuizItem';

import categories from '../utils/categories';

const QuizItemListWrap = styled.section`
    background-color: var(--main-bg-color);
    padding: 55px 15px;

    h2 {
        font-size: 30px;
        text-transform: capitalize;
        text-align: center;
        margin-bottom: 45px;
    }

    @media screen and (max-width:480px) {
      h2{
          font-size: 28px;
      }
    }
`

const QuizItemListing = styled.section`
    display: flex;

    > div {
        margin: 0 10px 10px 10px;
        width: calc(33.33333% - 20px);
    }

    @media screen and (max-width:768px) {
        flex-direction: column;

        > div {
            width: 100%;
            margin: 0 0 25px 0;
        } 

    }
`

const QuizItemList = () => {
    return(
        <QuizItemListWrap>
            <div className="wrapper">
                <h2>Most taken quizzes</h2>
                <QuizItemListing>
                    <QuizItem  title={categories[9].title} description={categories[9].description} ctaLink={`/quiz:${9}`} />
                    <QuizItem  title={categories[18].title} description={categories[18].description} ctaLink={`/quiz:${18}`} />
                    <QuizItem  title={categories[27].title} description={categories[27].description} ctaLink={`/quiz:${27}`} />
                </QuizItemListing>
            </div>
        </QuizItemListWrap>
    )
}

export default QuizItemList

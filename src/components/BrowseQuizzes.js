import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

import QuizItem from './QuizItem';

import categories from '../utils/Categories';

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
    flex-wrap: wrap;

    > div {
        margin: 0 10px 20px 10px;
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

const BrowseQuizzes = (props) => {
    const categoryList = Object.keys(categories);
    const categoryItems = categoryList.map( (item) => ( <QuizItem key={Number(item)} description={categories[Number(item)].description} title={categories[Number(item)].title} ctaLink={`/quiz:${Number(item)}`} /> ) );
    return(
        <>
            <Header history={props.history}/>
            <QuizItemListWrap>
                <div className="wrapper">
                    <h2>Our most taken quizzes</h2>
                    <QuizItemListing>
                       {categoryItems}
                    </QuizItemListing>
                </div>
            </QuizItemListWrap>
            <Footer />
        </>
    )
}

export default BrowseQuizzes;
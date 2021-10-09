import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import QuizItem from '../parts/QuizItem'

const NoData = styled.div`
  padding: 35px 0;
  text-align: center;
  img {
    max-width: 250px;
    opacity: 0.7;
    margin-bottom: 30px;
  }
  p a {
    text-decoration: none;
  }
`
const QuizItemListing = styled.section`
    display: flex;
    flex-wrap: wrap;

    > div {
        margin: 0 10px 20px 10px;
        width: calc(50% - 20px);
    }

    p strong {
      font-weight: 600;
    }

    @media screen and (max-width:768px) {
        flex-direction: column;

        > div {
            width: 100%;
            margin: 0 0 25px 0;
        } 

    }
`

const QuizHistory = (props) => {
  const quizData = props.data;
  if(!props.data) {
    return(
      <div className="wrapper">
        <NoData>
          <img src="./images/no-data.svg" alt="Quiz" />
          <p>No data available. <Link to='quizzes'>Take your first quiz</Link></p>
        </NoData>
      </div>
    )
  }

  const categoryList = Object.keys(quizData);
  const categoryItems = categoryList.map( (item, i) => (
    <QuizItem
      key={Number(i)}
      description={`You Scored <strong>${quizData[i].score} out of 10 </strong> <br/> <br/> Taken on <strong>${quizData[i].date}</strong>`}
      title={quizData[i].name}
      ctaText="Take quiz again" ctaLink={`/quiz:${Number(quizData[i].id)}`} /> ) ).reverse();

    return(
      <QuizItemListing>
        {categoryItems}
      </QuizItemListing>
    )
}

export default QuizHistory;
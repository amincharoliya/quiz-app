import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { connect } from "react-redux"
import { additionData } from "../redux/Data/data.actions"

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

const QuizHistory = (props) => {
  console.log(props.data);
  if(!props.data.quizzes.quizData) {
    return(
      <div className="wrapper">
        <NoData>
          <img src="./images/no-data.svg" alt="Quiz" />
          <p>No data available. <Link to='quizzes'>Take your first quiz</Link></p>
        </NoData>
      </div>
    )
  }

    return(
        <p>Has data.</p>
    )
}

const mapStateToProps = state => {
    return {
      data: state.data,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      additionData: (payload) => dispatch(additionData(payload))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(QuizHistory)
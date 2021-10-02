import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect } from "react-redux"

import { additionData } from "./redux/Data/data.actions"

import Home from './components/Home';
import QuizSingle from './components/QuizSingle';
import BrowseQuizzes from './components/BrowseQuizzes';
import UserPage from './components/UserPage';
import Credits from './components/Credits';
import NoMatch from './components/NoMatch';


function App(props) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quizzes" component={BrowseQuizzes} />
          <Route exact path="/quiz:type" component={QuizSingle} />
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/credits" component={Credits} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data.quizzes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    additionData: () => dispatch(additionData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

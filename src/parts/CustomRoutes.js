import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Home from '../pages/Home';
import QuizSingle from '../pages/QuizSingle';
import BrowseQuizzes from '../pages/BrowseQuizzes';
import UserPage from '../pages/UserPage';
import Credits from '../pages/Credits';
import NoMatch from '../pages/NoMatch';

const CustomRoutes = () => {
    return(
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
    )
}

export default CustomRoutes;
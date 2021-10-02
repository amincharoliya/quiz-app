import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home';
import QuizSingle from './components/QuizSingle';
import BrowseQuizzes from './components/BrowseQuizzes';
import Credits from './components/Credits';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quizzes" component={BrowseQuizzes} />
          <Route exact path="/quiz:type" component={QuizSingle} />
          <Route exact path="/credits" component={Credits} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

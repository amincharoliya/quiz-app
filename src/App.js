import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Components/Home';
import QuizSingle from './Components/QuizSingle';
import BrowseQuizzes from './Components/BrowseQuizzes';
import Credits from './Components/Credits';
import NoMatch from './Components/NoMatch';

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

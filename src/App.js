import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing-page/LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage}/>
      </Switch>
    </Router>
  );
}

export default App;

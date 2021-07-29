import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing-page/LandingPage';
import Streaming from './components/Straming./Streaming';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/streaming" component={Streaming}/>
      </Switch>
    </Router>
  );
}

export default App;

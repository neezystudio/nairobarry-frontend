import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing-page/LandingPage';
import React, { useState } from 'react';
import LoginScreen from "./screens/LoginScreen";


function App() {
  // const [modalOpen, setModalOpen] = useState(false);
  const user = null;
  // const handleModal = () => {
  //   setModalOpen(!modalOpen);
  // }
  return (
   <div className="app">
      <Router>
     {
     !user ?(
      <LoginScreen/>
     ):(
     
      <Switch>
          <Route exact path="/">
          <LandingPage/>
            </Route>
      </Switch>
     )
} 
    </Router>
   </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing-page/LandingPage';
import React, { useState } from 'react';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const user = null;
  const handleModal = () => {
    setModalOpen(!modalOpen);
  }
  return (
    <Router>
     {!user ?(
       handleModal
     ):
     (
<Switch>
<Route path="/" exact component={LandingPage} />
</Switch>
     )}
    </Router>
  );
}

export default App;

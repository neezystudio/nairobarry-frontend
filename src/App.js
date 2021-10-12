import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing-page/LandingPage';
import React, { useEffect, useState } from 'react';
import LoginScreen from "./screens/LoginScreen";
import { auth } from './firebase';


function App() {
  // const [modalOpen, setModalOpen] = useState(false);
  const user = null;
  // const handleModal = () => {
  //   setModalOpen(!modalOpen);
  // }
  useEffect(() =>{
    const unsubscribe= auth.onAuthStateChanged((userAuth) =>{
      if (userAuth){
        //logged in
        console.log(userAuth);
      }else{
        //logged out
      }
    });
    return unsubscribe; 
  })
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

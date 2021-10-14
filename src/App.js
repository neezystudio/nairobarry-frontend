import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing-page/LandingPage';
import React, { useEffect, useState } from 'react';
import LoginScreen from "./screens/LoginScreen";
import { auth } from './firebase';
import {useDispatch} from 'react-redux';
import userSlice, {login, logout} from './features/userSlice';

function App() {
  // const [modalOpen, setModalOpen] = useState(false);
  const user = null;
  const dispatch =useDispatch();
    useEffect(() =>{
    const unsubscribe= auth.onAuthStateChanged((userAuth) =>{
      if (userAuth){         
        //logged in
        dispatch(
          login({
          uid: userAuth.uid,
          email:userAuth.email,
        }));
      }else{
        //logged out
        dispatch(logout);
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

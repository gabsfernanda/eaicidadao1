import React, { useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Herder';
import Footer from './components/Footer';
import Routes from './Routes';
import Login from './pages/Login';
import './App.css'

function App() {

  // eslint-disable-next-line no-unused-vars
  const [user, setUser ] = useState (null);

  const actionLoginDataGoogle = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }
    setUser(newUser);
  }
  const actionLoginFacebook = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.name,
      avatar: u.photoURL
    }
    setUser(newUser);
  }


  if(user === null){
    return(
      <Login  onReceiveGoogle={actionLoginDataGoogle} onReceiveFacebook={actionLoginFacebook}/>
    );
  }

  return (
    <BrowserRouter>
    <Header/>
    <Routes/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;


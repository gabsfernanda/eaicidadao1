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

  if(user === null){
    return(
      <Login/>
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


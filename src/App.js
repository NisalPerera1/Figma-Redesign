// src/App.js
import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/home/home';
import LoginSection from './Components/home/loginSection';
import Footer from './Components/footer/Footer';
import Footer2 from './Components/footer/Footer2';

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <LoginSection/>
      <Footer/>
      <Footer2/>
    </div>
  );
}

export default App;

import React from 'react';
import { Body } from './components/Body';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer /> 
    </div>
  );
}

export default App;
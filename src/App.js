import './App.css';
import React from 'react';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import ButtonHome from './components/Button_Home';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Products />
      <Services />
      <Contact />
      <ButtonHome />
    </div>
  );
}

export default App;

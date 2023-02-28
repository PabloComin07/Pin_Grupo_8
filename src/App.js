import './App.css';
import React from 'react';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import Button_Home from './components/Button_Home';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Products />
      <Services />
      <Contact />
      <Button_Home />
    </div>
  );
}

export default App;

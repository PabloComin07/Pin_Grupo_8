import './App.css';
import React from 'react';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import Button_Home from './components/Button_Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <About />
      <Products />
      <Services />
      <Contact />
      <Button_Home />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import { Benefits, Footer, Header, Hero, Steps, Testimonials } from './pages/Homepage/';
import { Navbar } from './components';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
        <Header />
        <Hero />
        <Benefits />
        <Steps />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default App

import React, { Component } from 'react';
import './App.css'
import Home from './components/Home';
import About from './components/pages/About';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  
class App extends Component {
  render() {
  return (
    <>
      <Router>
        <Home />
        <Routes>
          <Route path='/' element={Home} />
          <Route path='/About' element={About} />
        </Routes>
      </Router>
    </>
  );
}
}



export default App;
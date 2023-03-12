import React, { Component } from 'react';
import './App.css'
import Home from './components/Home';
import AboutUs from './components/AboutUs';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  
class App extends Component {
  render() {
  return (
    <>
      <Router>
        <Home />
        <Routes>
          <Route path='/' element={Home} />
          <Route path='/about' component={AboutUs} />
          
        </Routes>
      </Router>
    </>
  );
}
}



export default App;
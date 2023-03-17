import React, { Component } from 'react';
import './App.css'
import Home from './components/Home';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  
class App extends Component {
  render() {
  return (
    <>
      <Router>
        <Home />
        <Routes>
        <Route exact path="/" component={Home} />
          
        </Routes>
      </Router>
    </>
  );
}
}



export default App;
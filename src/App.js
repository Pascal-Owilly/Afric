import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Team from './components/Team';
import SocialEnterprise from './components/SocialEnterprise';
import TeamPage from './components/TeamPage';
import Search from './components/Search';
import './App.css'; 

function App() {  
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  return (  
    <Router>
      <NavigationBar>
        <Search onFilterChange={handleFilterChange} />
      </NavigationBar>
      <Routes>
        <Route path="/" element={<Home filterValue={filterValue} />} exact />
        <Route path="/about" element={<AboutUs filterValue={filterValue} />} />
        <Route path="/contact" element={<Contact filterValue={filterValue} />} />
        <Route path="/socialent" element={<SocialEnterprise filterValue={filterValue} />}  />
        <Route path="/team" element={<Team filterValue={filterValue} />} />
        <Route path="/teampage" element={<TeamPage filterValue={filterValue} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

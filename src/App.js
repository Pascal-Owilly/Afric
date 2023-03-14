import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Team from './components/Team';
import SocialEnterprise from './components/SocialEnterprise';
import './App.css';

function App() {
  return (  
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/socialent" element={<SocialEnterprise />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

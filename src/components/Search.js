import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import './Search.css';
import Modal from 'react-modal';
import img11 from '../img/img11.jpeg';


function SearchForm() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  
  const handleClose = () => {
    setExpanded(false);
  };
  
  // ...
  
  <button className="cancel-btn" onClick={handleClose}>X</button>
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(`https://contact-mail.mwani.africa/api/search/?q=${query}`);
    if (response.data.results.length === 0) {
      setError(true);
      setSuccess(false);
    } else {
      setError(false);
      setSuccess(true);
      setResults(response.data.results);
    }
  };

  const highlight = (text, query) => {
    const words = query.split(/\s+/).filter(word => word.length > 0);
    const pattern = new RegExp(words.join('|'), 'gi');
    return text.replace(pattern, match => `<mark>${match}</mark>`);
  };

  return (
    <div className='d-flex column mt-3 ' style={{ marginLeft: '-5.7rem' }}>
      <form className='search-form align-right' onSubmit={handleSubmit}>
        <input
          placeholder='Search...'
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          className='search-btn d-inline p-1'
          style={{
            borderRadius: '0 25px 25px 25px',
            width: '50px',
            marginLeft: '-3.1rem',
          }}
          type="submit"
        >
          <FaSearch />
        </button>
      </form>
      
      {error && (
  <Modal isOpen={error} onRequestClose={() => setError(false)} style={{content: {height: '30vh', marginTop:'20vh', zIndex:9999}}}>
    <h2>
      No results found for '{query}'
      <button className="cancel-btn" onClick={() => setSuccess(false)}>X</button>
    </h2>
    <p>We couldn't find any results for "{query}". Please try a different search term.</p>
  </Modal>
)}
{success && (
  <Modal isOpen={success} onRequestClose={() => setSuccess(false)} style={{content: {height: '30vh', marginTop:'20vh', zIndex:9999}}}>
    <h2>
      Search Results for "{query}"
      <button className="cancel-btn" onClick={() => setSuccess(false)}>X</button>
    </h2>
    <ul>
      {results.map((result, index) => (
        <li key={index} dangerouslySetInnerHTML={{__html: `${highlight(result.name, query)} ${highlight(result.message, query)}`}}></li>
      ))}
    </ul>
  </Modal>
)}

    </div>
  );
}

export default SearchForm;

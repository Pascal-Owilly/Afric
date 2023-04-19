import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Search.css';
function SearchBar() {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="search-bar">
      <span className="search-icon" onClick={handleSearchClick}>
        <FaSearch style={{fontFamily:'verdana', fontSize:'15px', transition:'all 1s ease'}}/>
      </span>
      {showSearch && (
        <form className="search-form">
          <input type="text" placeholder="Search..." />
          <button className="search-btn" type="submit"></button>
        </form>
      )}
    </div>
  );
}

export default SearchBar;

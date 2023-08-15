import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); 
  
    const handleSearch = (e) => {
      e.preventDefault();
      // Redirect to search results page with the search term as a parameter
      navigate(`/search?q=${searchTerm}`); 
    }
 
    return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      {/* ... (rest of the code) */}
    </header>
  );
}

export default Header;

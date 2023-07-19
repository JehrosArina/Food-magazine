import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import { useState } from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

 const Header = ({data, setData, searchResult, setsearchResult }) => {

    const search = <FontAwesomeIcon icon={faSearch} />


 //Search functionality
    const [searchTerm, setSearchTerm] = useState('')  //for input
   

const handleSearchText = (event) => {
    const searchText = event.target.value;
    setSearchTerm(searchText);
  };

  const handleSearch = () => {
    const filteredData = data.filter((el) => {
      return el.recipeName.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setsearchResult(filteredData);

   
  };


  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">FoodCart</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Sea Food</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="search-icon">
            <input className='search' type="search" placeholder="Search..." onChange={handleSearchText}></input>
             <div className='searchBtn'>  
             <button className='btn'onClick={handleSearch}>{search}</button>
            </div>   
        </div>

  
      </div>
    </header>
  );
};

export default Header;

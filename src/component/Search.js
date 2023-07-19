
import {useState} from 'react';
import React from 'react'
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  
    const [searchTerm, setSearchTerm] = useState('')  //for input
    const [searchResult, setsearchResult] =useState([]) // for result
  
const element = <FontAwesomeIcon icon={faSearch} />



 const handleSearch =() =>{
 const filteredData = data.filter(el =>{ //filtering the data array
   return el.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
 })
  setsearchResult(filteredData)  //pass the filtered result back to ustate

 }


  return (
    <div className='inputcontainer'>
        <input className="searchInput" type="text" placeholder='Search here..' onChange={(event) => {setSearchTerm(event.target.value)}} />
        <button  className='btn' onClick={handleSearch}>{element}</button>  

        <div className='container'>
        {searchTerm && searchResult.map(el =>{
          return <div className='displayresults' key={el.id}>
            <p>{el.title}</p>
            <img src={el.image}></img>
            <p>{el.price}</p>
          </div>
        })}
      </div>

   </div>
 
  )
}

export default Search


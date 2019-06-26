import React, { useState } from 'react';
// import styled from 'styled-components';
import history from '../history';

import '../css/search.css';

const SearchBar = () => {
  const [ input, setInput ] = useState('');
  

  function onFormSubmit(e) {
    e.preventDefault();
    if(input.length === 0) {
      return;
    }
    
    history.push(`${process.env.PUBLIC_URL}/search/${input}`);

    setInput('')
  }
  const inputChange = (e) => {
    setInput(e.target.value)
  }

  return (
  <form className="form" type="submit" onSubmit={onFormSubmit}>
    <input 
          className="input-search"
          type="text" 
          placeholder="Search..."
          value={input} 
          onChange={inputChange} />
    <i className="fa fa-search" />
  </form>
  )
}

export default SearchBar

import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  function handleSearch({ target }) {
    setSearchValue(target.value)
  }

  return (
    <form className='search_bar'>
      <input type="search" placeholder='Buscar produtos' className='search_input' value={searchValue} onChange={handleSearch} required />
      <button type='submit' className='search_button'>
        <BsSearch />
      </button>
    </form>
  )
}

export default SearchBar;
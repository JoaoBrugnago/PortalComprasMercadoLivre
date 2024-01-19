import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

import './SearchBar.css';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  //Context
  const {setProducts, setLoading} = useContext(AppContext)

  const Search = async (event) => {
    event.preventDefault();
    setLoading(true)
    const products = await fetchProducts(searchValue)
    setProducts(products)
    setLoading(false)
    setSearchValue('')
  }

  function handleSearch({ target }) {
    setSearchValue(target.value)
  }

  return (
    <form className='search_bar' onSubmit={Search}>
      <input type="search" placeholder='Buscar produtos' className='search_input' value={searchValue} onChange={handleSearch} required />
      <button type='submit' className='search_button'>
        <BsSearch />
      </button>
    </form>
  )
}

export default SearchBar;
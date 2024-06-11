'use client'
import React from 'react'
import SearchManufacturer from './SearchManufacturer'

const SearchBar = () => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('searching...')
  }
  return (
    <form action="" className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer />
      </div>
    </form>
  )
}

export default SearchBar
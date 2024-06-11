'use client'
import React, { useActionState, useState } from 'react'
import SearchManufacturer from './SearchManufacturer'

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('searching...')
  }
  return (
    <form action="" className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
         />
      </div>
    </form>
  )
}

export default SearchBar
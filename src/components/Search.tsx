import React from 'react'
import { SearchProps } from '../utils/movie-interfaces'

export const Search: React.FC<SearchProps> = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
      <div>
        <img src="search.svg" alt="search" />
        <input type="text"
        placeholder='Search Through thousands of movies' 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
    </div>
  )
}

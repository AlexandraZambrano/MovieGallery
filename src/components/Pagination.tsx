import React from 'react'
import { PaginationProps } from '../utils/movie-interfaces';

const Pagination: React.FC<PaginationProps> = ({currentPage, prevPage, nextPage, totalPages}) => {

    console.log('Hola en esta pagina', currentPage, totalPages);
  return (
    <div className='pagination'>

        <button className="prev-button" onClick={() => {currentPage > 1 ? prevPage() : currentPage}}>
        Previous
        </button>

        <button className='next-button' onClick={() => {currentPage < totalPages ? nextPage() : currentPage}}>Next</button>
    </div>
  )
}

export default Pagination
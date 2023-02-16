import React, { useEffect, useState } from 'react';



const Paginationn = ({postsPerPage, totalPosts, paginate, currentPage}) => {
const pageNumbers = [];


for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  pageNumbers.push(i)
}



  return (
<>
<div>
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">








    {

      pageNumbers.map(number => (
  <a href="#" key={number} onClick={() => paginate(number)} aria-current="page" className={`${ number == currentPage ? 'border-indigo-500 bg-indigo-50 text-indigo-600' : '' } relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20`}>{number}</a>
      ))

    }




  </nav>
</div>
</>

  )
}

export default Paginationn;

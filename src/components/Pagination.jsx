import React from 'react';
import  { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const {page, handlePageChange,totalPages} = useContext(AppContext);
    console.log("inside Pagination");
    console.log(page);
  return (
    <div>
      <div>
          { page > 1 && 
            (
              <button onClick={() => handlePageChange (page-1) }>
                Previous
              </button>
            )

          }
          { page < totalPages  &&
            (
              <button onClick={() => handlePageChange(page+1)}>
                Next
              </button>
            )

          }

          <p>
             Page {page} of {totalPages}
          </p>

      </div>
    </div>
  )
}

export default Pagination

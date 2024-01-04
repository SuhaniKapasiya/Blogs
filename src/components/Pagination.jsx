import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  // console.log("inside Pagination");
  console.log("inside pagination", page);
  return (
    <div   className="w-full flex justify-center  items-center border-2 fixed  bottom-0  bg-white">
      <div className="w-11/12 flex justify-between max-w-[670px] py-1">
        <div className="flex gap-2">

        {page > 1 && (
          <button  className="rounded-md border-2 px-4 py-1"
           onClick={() => handlePageChange(page - 1)}>
            Previous
            
          </button>
        )}
        {page < totalPages && (
          <button className="rounded-md border-2 px-4 py-1"
          onClick={() => handlePageChange(page + 1)}>
            Next
          </button>
        )}

        </div>

        <p className="font-bold text-sm">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Item_img from "../components/Item_img";


export default function Pagination(props) {
 const { data } = props;
const dataT =  Object.entries(data);
 console.log(data.title);

 // We start with an empty list of elements.
 const [currentitems, setCurrentitems] = useState([]);
   const [pageCount, setPageCount] = useState(0);
   const itemsPerPage = 10;
   // element offsets; we also use as page scrolls
   // API we are working with.
   const [itemOffset, setItemOffset] = useState(0);

   useEffect(() => {    // Get the items of other resources.
   const endOffset = itemOffset + itemsPerPage;

   setCurrentitems(dataT.slice(itemOffset, endOffset));
   setPageCount(Math.ceil(dataT.length / itemsPerPage));
 });

 // Call user clicks to request another page.
 const handlePageClick = (event) => {
   const newOffset = (event.selected * itemsPerPage) % data.length;

   setItemOffset(newOffset);
 };
 return (
   <>
<div>

{

currentitems.map(

image => {

return(

<p>{dataT[5].news}</p>

);

}

)

}

</div>


     <ReactPaginate
       breakLabel="..."
       nextLabel="next >"
       onPageChange={handlePageClick}
       Displayed Page Range = {5}
       pageCount={pageCount}
       previousLabel="< previous"
       renderOnZeroPageCount={null}
     />
   </>
 );


}

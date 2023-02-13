import React, { useEffect, useState } from 'react';
import Pagination from "../components/Pagination";



const Pagination_page = () => {

const [images, setImages] = useState([]);

useEffect(() => {

  fetch(`https://news.itmo.ru/api/news/list/?ver=2.0`).then(
    response => response.json().then(data => {
      setImages(data);
    })
  )



},[])

  return (
    <>

<p>Пагинация</p>



<Pagination data={images}/>



    </>
  );
};








export default Pagination_page;

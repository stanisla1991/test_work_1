import React, { useEffect, useState } from 'react';
import Posts from "../components/Posts";
import Paginationn from "../components/Paginationn";
import axios from 'axios';


const Pagination_page = () => {
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(9);
useEffect(() => {
const getPosts = async () => {
  setLoading(true)
  const res = await axios.get('https://news.itmo.ru/api/news/list/?ver=2.0&per_page=144');
  setPosts(res.data.news)
  setLoading(false)

}
getPosts()
}, [])


const lastPostsIndex = currentPage * postsPerPage;
const firstPostsIndex = lastPostsIndex - postsPerPage;
const currentPosts = posts.slice(firstPostsIndex, lastPostsIndex)
const paginate = pageNumber => setCurrentPage(pageNumber)


const handleChange = (event, value) => {
  setPage(value);
};

  return (


    <>
    <div className="h-10 w-1/3 mt-12 mb-12 flex pt-2 place-content-between justify-self-center items-center">
        <p className="font-bold text-4xl ml-52 sm:ml-5 sm:font-bold md:ml-5 md:font-bold lg:ml-52 lg:font-bold xl:ml-52 xl:font-bold sm:text-3xl sm:font-bold lg:text-2xl lg:font-bold xl:text-2xl 2xl:text-4xl">Новости и события</p>

    </div>

<div className="ml-52 mb-12 sm:ml-5 md:ml-5 lg:ml-52 xl:ml-52">
<Paginationn postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage} />
</div>


    <div className="flex grid-cols-1 sm:ml-3 lg:ml-52 mr-96 sm:mr-3 lg:mr-52 mb-20 gap-6 grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 grid-rows-3 place-content-center justify-self-center items-center">

<Posts posts={currentPosts} />
<Paginationn postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage} />

    </div>






    </>
  );
};


export default Pagination_page;

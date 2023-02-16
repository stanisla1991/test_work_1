import React, { useEffect, useState } from 'react';
import Blog_item from "../components/Blog_item";
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton'





const Posts = ({posts, loading}) => {
  const [opn_url, setOpn_url] = useState(false);

if (loading) {
  return <div><p>идет загрузка....</p></div>
}

  return (


    <>

{

  posts.map((post, i) => (

<Blog_item url={post.url} id={post.id} img={post.image_big} date={post.date} viewCount={post.view_count} colorCategory={post.category.color} titleCategory={post.category.category_title} ttl={post.title} />



  ))

}




    </>
  )
}

export default Posts;

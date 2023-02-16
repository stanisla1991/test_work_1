import Blog_item from "../components/Blog_item";
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton'



function Blog({posts}) {
  return (


    <>




      {posts.news.map((post) => (<Blog_item url={post.url} id={post.id} img={post.image_big} date={post.date} viewCount={post.view_count} colorCategory={post.category.color} titleCategory={post.category.category_title} ttl={post.title} />))}

    </>
  )
}

export default Blog;







//
//
// function Test({ posts }) {
//   const test = post.date.split(' ')[0].split('-')[1];
//   if (test) {
//     console.log("УРААААААААА");
//   }
// export default Test;

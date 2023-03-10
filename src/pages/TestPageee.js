// import Blog from "../components/Blog";
//
// const NextPage = ({posts}) => {
//   return (
//     <>
//       <Blog posts={posts}/>
//     </>
//   );
// };
//
// export async function getStaticProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const posts = await res.json()
//
//   return {
//     props: {
//       posts,
//     },
//   }
// }
//
//
// export default NextPage;




import Blog from "../components/Blog";

const NextPage = ({posts}) => {
  return (
    <>
    <div className="h-10 w-1/3 mt-12 mb-12 flex pt-2 place-content-between justify-self-center items-center">
        <p className="font-bold text-4xl ml-52 sm:ml-5 sm:font-bold md:ml-5 md:font-bold lg:ml-52 lg:font-bold xl:ml-52 xl:font-bold sm:text-3xl sm:font-bold lg:text-2xl lg:font-bold xl:text-2xl 2xl:text-4xl">Новости и события</p>
    </div>

    <div className="flex grid-cols-1 sm:ml-3 lg:ml-52 mr-96 sm:mr-3 lg:mr-52 mb-20 gap-6 grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 grid-rows-3 place-content-center justify-self-center items-center">
    <Blog posts={posts} /> 

    </div>

    </>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=9&language_id=1')
  const posts = await res.json()
  // console.log(posts.news.title);


  return {
    props: {
      posts,
    },
  }
}





export default NextPage;

import { useRouter } from "next/router";



// const Article_page = ({posts}) => {
//   return (
//     <>
//       {posts.news.map((post) => (
//
//         <p key={post.id} >{post.title}</p>
//
//
//
//
//
//
//       ))}
//
//     </>
//   );
// };
//
// export default Article_page;




export async function getStaticPaths(context) {
  let url = `https://news.itmo.ru/api/news/list/?ver=2.0`;
  const res = await fetch(url)
  const posts = await res.json()
  const paths = posts.news.map(({ id }) => ({
      params: { id: id.toString()},
  }));
  return {
    paths,
    fallback: false,

  }
};



export async function getStaticProps() {
  let per_page = `1`;
  let total = `1`;
  let page = `1`;
  let url = `https://news.itmo.ru/api/news/list/?ver=2.0`;
  const res = await fetch(url)
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}


export default function ContactId() {

  return (
    <div>


      <p>At ID number: {id}</p>

    </div>
  );
}

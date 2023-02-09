import React, { useState } from 'react';
import Item_data from "../components/Item_data";
import Item_img from "../components/Item_img";
import Window from "../components/Window";
import styles from "../styles/Home.module.css";




const hidden = {
  opacity: '0'
}

const open = {
  opacity: '1'
}


const container = {
  display: 'contents',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  paddingTop: "56.25%",
  height: '800px'
}



const btn = {

  position: 'sticky',
    zIndex: '1',
    marginLeft: '25px',
    backgroundColor: '#5833bb',
    borderRadius: '8px',
    padding: '8px',
    color: '#fafafa'
}


const Article_page = ({posts}) => {
const [opn_url, setOpn_url] = useState(false);

  return (
    <>
      {posts.news.map((post) => (

        <div key={post.id} className="h-auto w-96 mb-5 sm:w-auto rounded-2xl bg-slate-50 shadow-lg">
      <Item_img img={post.image_big} width={385} height={576} />

        <div className="w-auto p-8">
  <div className={`${opn_url ? 'open' : 'hidden '}`}>
  <button style={btn} onClick={(index) => setOpn_url(false)} >Закрыть</button>
        <div style={container}>
        <Window url={post.url}/>
        </div>
      </div>
          <Item_data date={post.date} viewCount={post.view_count} colorCategory={post.category.color} titleCategory={post.category.category_title}/>
        <span  onClick={(index) => setOpn_url(true)}  className="pt-4 font-semibold text-base">
        {post.title.substr(0, 50).replace(/\s{2,}/g, ' ') + "    ...УЗНАТЬ БОЛЬШЕ"}
        </span>
          </div>
        </div>


      ))}

    </>
  );
};

export async function getStaticProps() {
  let per_page = `50`;
  let total = `5`;
  let page = `1`;
  let url = `https://news.itmo.ru/api/news/list/?ver=2.0&lead=1`;
  const res = await fetch(url)
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}

export default Article_page;

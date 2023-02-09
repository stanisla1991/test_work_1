import Item_title from "../components/Item_title";
import Item_data from "../components/Item_data";
import Item_img from "../components/Item_img";
import Window from "../components/Window";

const Blog_item = ({ id, img, date, viewCount, colorCategory, titleCategory, ttl, url }) => {


return (

  <div key={id} className="h-auto w-96 mb-5 sm:w-auto rounded-2xl bg-slate-50 shadow-lg">

<Item_img img={img} width={385} height={576} />
  <div className="w-auto p-8">
    <Item_data date={date} viewCount={viewCount} colorCategory={colorCategory} titleCategory={titleCategory}/>
  <Item_title ttl={ttl} />
  <Window url={url}/>
    </div>
  </div>
);

};

export default Blog_item;

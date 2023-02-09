import Date from "./Date";


const Item_data = ({ date, viewCount, colorCategory, titleCategory }) => {


return (
  <h3 className="text-xs">
  <Date dateString={date.split(' ')[0]} />
  <span className=" ml-2 mr-2"> Просмотров: {viewCount}</span>
  <span className=" mr-1 pl-1 pt-px pb-1 pr-1" style={{ border: "1px solid", color: colorCategory}}>{titleCategory}</span>
  </h3>
);

};

export default Item_data;

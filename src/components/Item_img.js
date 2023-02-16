import Image from "next/image";


const Item_img = ({ img }) => {


return (
  <div>
  <Image className="w-[100em] min-h-[20vw] rounded-t-lg" src={img} width={385} height={576} alt="sss" />
  </div>



);

};

export default Item_img;

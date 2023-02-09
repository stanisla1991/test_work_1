import Image from "next/image";


const Item_img = ({ img }) => {


return (
  <div>
  <Image className="w-4/12 sm:w-[767px] md:w-[573px] lg:w-[767px] h-[224px] sm:h-[448px] md:h-[336px] lg:h-[448px] rounded-t-lg" src={img} width={385} height={576} alt="sss" />
  </div>



);

};

export default Item_img;

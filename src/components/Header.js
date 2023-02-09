import React, { useState } from 'react';
import Link from 'next/link'


const pointer = {
  cursor: 'pointer',

}


const Header = ({posts}) => {

  const [open, setOpen] = useState(false);

return (
  <div className="h-10 flex gap-4 pt-2 pr-40 place-content-between space-x-4 bg-gradient-to-r from-blue-600 to-purple-800">
      <div className="w-40 h-4 ml-52">
        <img src="/logo.png" alt="" />
      </div>


    <div className="w-40 h-4 ">
      <span onClick={(index) => setOpen(true)} ><img className="w-auto h-5 absolute" src="/rus.png" alt="" />
  <p style={pointer} className="ml-7 absolute text-white font-medium">Рус</p>
         <img className="w-auto h-1 ml-16 mt-2" src="/arrow.png" alt="" />
       </span>

      { open && (
       <div className=" place-content-end grid gap-1 pr-30 mt-5 -ml-2 absolute bg-white shadow-lg rounded-b-lg">
         <div className="col-span-4 pt-2 pl-2 pb-8 w-20 margin-0 hover:bg-indigo-50">
           <Link href="/en"><img className="w-auto h-5 absolute" src="/eng.png" alt="" />
       <p className="ml-7 absolute">Eng</p>
            </Link>
         </div>
         <div className="col-span-4 pt-2 pl-2 pb-8 w-20 margin-0 hover:bg-indigo-50">
        <Link href="/"><img className="w-auto h-5 absolute" src="/rus.png" alt="" /><p className="ml-7 absolute">Рус</p> </Link>
         </div>
       </div> )}
    </div>

  </div>


);
};

export default Header;

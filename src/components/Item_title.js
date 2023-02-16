import React, { useState } from 'react';


const Item_title = ({ ttl }) => {
const [opn_url, setOpn_url] = useState(false);

return (
  <p onClick={(index) => setOpn_url(true)} className="pt-4 font-semibold text-base">
  {ttl.substr(0, 40).replace(/\s{2,}/g, ' ') + "..."}
  </p>



);

};

export default Item_title;

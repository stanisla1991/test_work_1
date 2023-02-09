
const Window = ({url}) => {
    function handleClick(e) {
    e.preventDefault();

    document.open(`${url}`, '_blank', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
  }
  return (
  <div>

      <button onClick={handleClick}>
          ПОСМОТРЕТЬ СТАТЬЮ
     </button>
    </div>
);
  }


export default Window;

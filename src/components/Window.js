import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';


const Window = ({url, loading}) => {
    function handleClick(e) {
    e.preventDefault();
    document.open(`${url}`, '_blank', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
  }

  if(loading) {
    return <div>
              <Skeleton />
        </div>
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

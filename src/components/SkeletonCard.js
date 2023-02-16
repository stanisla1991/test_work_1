import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
const SkeletonCard = ({ countries }) => {
    return (
      <section >


        <div className="flex grid-cols-1 2xl:grid-cols-3 grid-rows-3 place-content-center justify-self-center items-center">
          {Array(3)
            .fill()
            .map((_, index, countries) => (
              <div className=" mb-5 rounded-2xl bg-slate-50 shadow-lg" key={index}>
                <Skeleton height={180} />
                <h4 className="card-title">
                  <Skeleton/>
                  <Skeleton height={36} width={`350px`} />
                </h4>
                <p className="card-channel">
                  <Skeleton width={`350px`} />
                </p>
                <div className="card-metrics">
                  <Skeleton width={`350px`} />
                </div>
              </div>
            ))}
        </div>
      </section>
    );
  };
  export default SkeletonCard;

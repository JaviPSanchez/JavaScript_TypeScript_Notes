import styles from '@styles';
import { useState } from 'react';
import { ImStarEmpty, ImStarHalf, ImStarFull } from 'react-icons/im';

const StartRating = () => {
  const [currentRating, setCurrentRating] = useState(null);
  const [hover, setHover] = useState(null);
  console.log(currentRating);
  return (
    <div
      className={`${styles.centerPosition} min-w-[300px] min-h-[250px] flex flex-row justify-center items-center bg-orangeLightess rounded-2xl drop-shadow-2xl p-6`}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input
              className="hidden"
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setCurrentRating(currentRating)}
            />
            <ImStarEmpty
              key={index}
              size={40}
              className="cursor-pointer"
              color={
                currentRating <= (hover || currentRating)
                  ? '#ffc107'
                  : '#e4e5e9'
              }
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
            ;
          </label>
        );
      })}
      <p className="text-2xl">Your Rating is {currentRating}</p>

      {/* <ImStarHalf className="w-12 h-12" />
      <ImStarFull className="w-12 h-12" /> */}
    </div>
  );
};

export default StartRating;

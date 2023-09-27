import styles from '@styles';
import { useState } from 'react';
import { RxStarFilled } from 'react-icons/rx';

export function StarHover({ hover, onSetHover, onSetCurrentRating }) {
  return (
    <div className="flex flex-row">
      {Array.from({ length: 5 }, (_, index) => {
        const currentRating = index + 1;
        console.log(currentRating);
        console.log(hover);

        return (
          <label key={index}>
            <input
              className="hidden"
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => onSetCurrentRating(currentRating)}
            />
            <RxStarFilled
              className={`w-12 h-12 cursor-pointer hover:scale-110 active:scale-90 ${
                currentRating <= (hover || currentRating)
                  ? 'text-[#ffc107]'
                  : 'text-[#e4e5e9]'
              }`}
              onMouseOver={() => onSetHover(currentRating)}
              onMouseOut={() => onSetHover(currentRating)}
            />
          </label>
        );
      })}
    </div>
  );
}

const StartRating = () => {
  const [currentRating, setCurrentRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div
      className={`${styles.centerPosition} min-w-[300px] min-h-[250px] flex flex-col justify-center items-center bg-orangeLightess rounded-2xl drop-shadow-2xl p-6`}
    >
      <StarHover
        hover={hover}
        onSetHover={setHover}
        onSetCurrentRating={setCurrentRating}
      />

      <div className="m-6 flex flex-col items-center">
        <p className="text-2xl font-bold">
          Your Rating is: {!currentRating ? 'Not selected yet' : currentRating}
        </p>
        <p className="text-2xl font-bold m-6">
          Your Hover is: {!currentRating ? 'Not selected yet' : hover}
        </p>
      </div>
    </div>
  );
};

export default StartRating;

import styles from '@styles';
import { useState } from 'react';
import { questionsFlashCards } from '@data';

const FlashCard = () => {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(selectedId !== id ? id : null);
  }
  return (
    <div
      className={`${styles.centerPosition} min-w-[700px] max-w-[700px] min-h-[500px] grid grid-row-2 grid-cols-3 gap-6 bg-orangeLightess rounded-2xl drop-shadow-2xl p-6`}
    >
      {questionsFlashCards.map(item => (
        <div
          key={item.id}
          className={`
            ${
              selectedId === item.id
                ? 'bg-red text-white transition-all duration-300 '
                : 'bg-[#f0ffff]'
            } 'w-[350px] h-[250px] flex justify-center items-center text-center p-6 border-[0.5px] border-grey3 text-3xl font-bold rounded-2xl drop-shadow-xl' `}
          onClick={() => handleClick(item.id)}
        >
          <p>{item.id === selectedId ? item.answer : item.question}</p>
        </div>
      ))}
    </div>
  );
};

export default FlashCard;

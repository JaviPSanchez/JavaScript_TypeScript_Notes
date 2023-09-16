import { Item } from '@components';
import styles from '@styles';
import { useState } from 'react';
import { dataAccordion } from '@data';

const Accordion = () => {
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <div
      className={`${styles.centerPosition} min-w-fit min-h-[300px] flex flex-col justify-start items-start bg-orangeLightess rounded-2xl drop-shadow-2xl p-6`}
    >
      {dataAccordion.map((item, index) => (
        <Item
          currentOpen={currentOpen}
          onOpen={setCurrentOpen}
          key={index}
          num={index}
          title={item.title}
          text={item.text}
        >
          {item.text}
        </Item>
      ))}
    </div>
  );
};

export default Accordion;

import { Item } from '@components';
import styles from '@styles';
import { useState } from 'react';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

const Accordion = () => {
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <div
      className={`${styles.centerPosition} min-w-fit min-h-[300px] flex flex-col justify-start items-start bg-orangeLightess rounded-2xl drop-shadow-2xl p-6`}
    >
      {faqs.map((item, index) => (
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

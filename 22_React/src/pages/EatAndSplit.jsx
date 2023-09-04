import styles from '@styles';
import { useState } from 'react';
import { FriendList, AddFriend, SplitBill } from '@components';

const EatAndSplit = () => {
  const [items, setItems] = useState([]);
  console.log(items);

  function handleAddFriend(item) {
    setItems(items => [...items, item]);
  }

  return (
    <div
      className={`${styles.centerPosition} min-w-[750px] min-h-[500px] flex flex-col justify-start items-start bg-orangeLightess rounded-2xl drop-shadow-2xl p-6`}
    >
      <div className="w-full min-h-[500px] grid gap-6 grid-cols-2 grid-rows-3">
        <FriendList items={items} />
        <SplitBill />
        <AddFriend onAddFriend={handleAddFriend} />
      </div>
    </div>
  );
};

export default EatAndSplit;

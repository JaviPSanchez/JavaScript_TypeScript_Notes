import styles from '@styles';
import { useState } from 'react';
import { FriendList, AddFriend, SplitBill } from '@components';
import data from '@data';

const EatAndSplit = () => {
  const [items, setItems] = useState(data);
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  function handleAddFriend(item) {
    setItems(items => [...items, item]);
  }

  return (
    <div
      className={`${styles.centerPosition} min-w-[750px] min-h-[500px] flex flex-col justify-start items-start bg-orangeLightess rounded-2xl drop-shadow-2xl p-6`}
    >
      <div className="w-full max-h-[600px] grid gap-6 grid-cols-2 grid-rows-3">
        <FriendList
          items={items}
          selected={selected}
          onSelected={setSelected}
          open={open}
          onOpen={setOpen}
        />
        <SplitBill items={items} selected={selected} />
        <AddFriend onAddFriend={handleAddFriend} open={open} onOpen={setOpen} />
      </div>
    </div>
  );
};

export default EatAndSplit;

import styles from '@styles';
import { useState } from 'react';
import { FriendList, AddFriend, SplitBill } from '@components';
import data from '@data';

const EatAndSplit = () => {
  const [items, setItems] = useState(data);
  const [selected, setSelected] = useState([]);

  function handleAddFriend(item) {
    setItems(items => [...items, item]);
  }

  function handleSelectItem() {
    setSelected(items => items.filter());
  }

  function handleModifyItem() {}

  return (
    <div
      className={`${styles.centerPosition} min-w-[750px] min-h-[500px] flex flex-col justify-start items-start bg-orangeLightess rounded-2xl drop-shadow-2xl p-6`}
    >
      <div className="w-full min-h-[500px] grid gap-6 grid-cols-2 grid-rows-3">
        <FriendList items={items} onSelectItem={handleSelectItem} />
        <SplitBill onModifyItem={handleModifyItem} />
        <AddFriend
          onAddFriend={handleAddFriend}
          onSelectFriend={handleSelectItem}
        />
      </div>
    </div>
  );
};

export default EatAndSplit;

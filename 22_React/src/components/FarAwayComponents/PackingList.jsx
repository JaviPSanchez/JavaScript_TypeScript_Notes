import Item from './Item';
import { useState } from 'react';

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  if (sortBy === 'packedStatus')
    sortedItems = items.filter(item => item.packed === true);

  return (
    <div className="bg-[#5a3e2b] text-[#ffebb3] px-6 flex flex-col justify-between items-center gap-6">
      <ul className="w-2/3 grid grid-cols-list uppercase py-[0.8rem] px-[2.4rem] text-4xl font-bold my-0 mx-[0.8rem]">
        {sortedItems.map(item => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            onClearList={onClearList}
          />
        ))}
      </ul>
      <div className="flex flex-row gap-6 uppercase py-[0.8rem] px-[2.4rem] text-4xl font-bold my-0 mx-[0.8rem] ">
        <select
          className="w-fit bg-[#ffebb3] text-[#5a3e2b] border-none rounded-2xl font-bold cursor-pointer p-4"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
          <option value="packedStatus">Order by packed status</option>
        </select>
        <button
          className="w-fit bg-[#ffebb3] text-[#5a3e2b] border-none rounded-2xl font-bold cursor-pointer p-4"
          onClick={onClearList}
        >
          Clear list
        </button>
      </div>
    </div>
  );
};

export default PackingList;

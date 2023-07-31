import styles from './PackingList.module.css';
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
    <div className={styles.list}>
      <ul>
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
      <div className={styles.actions}>
        <select
          className={styles.form__title}
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
          <option value="packedStatus">Order by packed status</option>
        </select>
        <button className={styles.form__title} onClick={onClearList}>
          Clear list
        </button>
      </div>
    </div>
  );
};

export default PackingList;

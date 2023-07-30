import styles from './PackingList.module.css';
import Item from './Item';

const PackingList = ({ items, onDeleteItem, onToggleItem }) => {
  return (
    <div className={styles.list}>
      <ul>
        {items.map(item => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className={styles.actions}>
        <select className={styles.form__title}>
          <option value={styles.input}>Sort by input order</option>
          <option value={styles.description}>Sort by description</option>
          <option value={styles.packed}>Sort by packed status</option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;

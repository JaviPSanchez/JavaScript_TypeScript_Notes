import styles from './PackingList.module.css';
import Item from './Item';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Charger', quantity: 1, packed: true },
];

const PackingList = () => {
  return (
    <div className={styles.list}>
      <ul>
        {initialItems.map(item => (
          <Item key={item.id} item={item} />
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

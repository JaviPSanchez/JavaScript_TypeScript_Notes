import styles from './Item.module.css';

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li className={styles.list}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span
        className={styles.items}
        style={item.packed ? { textDecoration: 'line-through' } : {}}
      >
        <span>{item.quantity}</span>
        <span>{item.description}</span>
      </span>

      <button
        onClick={() => onDeleteItem(item.id)}
        className={styles.deleteItem}
      >
        ❌
      </button>
    </li>
  );
};

export default Item;

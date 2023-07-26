import styles from './Item.module.css';

const Item = ({ item }) => {
  return (
    <li>
      <input type="checkbox" />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Item;

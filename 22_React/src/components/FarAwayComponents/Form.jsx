import styles from './Form.module.css';
import Item from './Item';
import { useState } from 'react';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Charger', quantity: 1, packed: true },
];

const Logo = () => {
  return <h1>🏝️ Far Away 🧳</h1>;
};

const Form = () => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription('');
    setQuantity(1);
  }

  return (
    <form className={styles.addForm} onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={e => setQuantity(+e.target.value)}>
        {Array.from({ length: 10 }, (_, index) => index + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

const PackingList = () => {
  return (
    <div className={styles.list}>
      <ul>
        {initialItems.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      <div className={styles.actions}>
        <select>
          <option value={styles.input}>Sort by input order</option>
          <option value={styles.description}>Sort by description</option>
          <option value={styles.packed}>Sort by packed status</option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <footer className={styles.stats}>
      <em>{`💼 You have X items on your list, and you already packed X (X%)`}</em>
    </footer>
  );
};

export { Form, Logo, PackingList, Stats };

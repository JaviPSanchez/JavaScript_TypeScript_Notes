import styles from './Form.module.css';
import { useState } from 'react';

const Form = () => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);
  console.log(items);

  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    handleAddItems(newItem);

    setDescription('');
    setQuantity(1);
  }

  return (
    <form className={styles.addForm} onSubmit={handleSubmit}>
      <h3 className={styles.title}>What do you need for your 😍 trip?</h3>
      <select
        className={styles.form__title}
        value={quantity}
        onChange={e => setQuantity(+e.target.value)}
      >
        {Array.from({ length: 10 }, (_, index) => index + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        className={styles.form__title}
        type="text"
        placeholder="Item..."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button className={styles.form__title}>Add</button>
    </form>
  );
};

export default Form;

import styles from './Item.module.css';
import { useState } from 'react';

const Item = ({ num, title, text }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${!open ? styles.item : styles.open}`}
      onClick={() => setOpen(!open)}
    >
      <div className={styles.itemComponents}>
        <p className={styles.number}>{`0${num + 1}`}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.icon}>{open ? '-' : '+'}</p>
      </div>
      {open && (
        <div className={styles.text}>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

export default Item;

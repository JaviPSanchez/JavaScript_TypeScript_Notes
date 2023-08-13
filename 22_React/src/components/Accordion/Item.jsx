import styles from './Item.module.css';

const Item = ({ num, title, currentOpen, onOpen, children }) => {
  const open = num === currentOpen;

  const handleToggel = function () {
    onOpen(open ? null : num);
  };

  return (
    <div
      className={`${!open ? styles.item : styles.open}`}
      onClick={handleToggel}
    >
      <div className={styles.itemComponents}>
        <p className={styles.number}>{`0${num + 1}`}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.icon}>{open ? '-' : '+'}</p>
      </div>
      {open && (
        <div className={styles.text}>
          <p>{children}</p>
        </div>
      )}
    </div>
  );
};

export default Item;

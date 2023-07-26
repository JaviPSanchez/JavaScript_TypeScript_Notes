import styles from './Stats.module.css';

const Stats = () => {
  return (
    <footer className={styles.stats}>
      <em>{`💼 You have X items on your list, and you already packed X (X%)`}</em>
    </footer>
  );
};

export default Stats;

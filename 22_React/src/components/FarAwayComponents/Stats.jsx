import styles from './Stats.module.css';

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <em className={styles.stats}>
        Start adding items to your packing list ✌️!
      </em>
    );
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  console.log(percentage);

  return (
    <footer className={styles.stats}>
      <em>
        {percentage !== 100
          ? `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`
          : `You got everything! Ready to go 😊`}
      </em>
    </footer>
  );
};

export default Stats;

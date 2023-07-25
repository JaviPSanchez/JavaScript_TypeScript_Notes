import styles from './FarAway.module.css';
import { Logo, Form, PackingList, Stats } from '@components';

const FarAway = () => {
  return (
    <div className={styles.app}>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

export default FarAway;

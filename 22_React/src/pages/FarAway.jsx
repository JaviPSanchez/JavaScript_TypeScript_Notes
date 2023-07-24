import styles from '../components/FarAwayComponents/Form.module.css';
import { Logo, Form, PackingList, Stats } from '@components';

export const FarAway = () => {
  return (
    <div className={styles.app}>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

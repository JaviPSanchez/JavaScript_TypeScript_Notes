import styles from './TipCalculator.module.css';
import { useState } from 'react';

export const BillInput = ({ setBill, bill }) => {
  return (
    <div>
      <form className={styles.addForm}>
        <h3>How much was the bill?</h3>
        <input
          className={styles.form__title}
          type="number"
          placeholder="Enter bill..."
          value={bill}
          onChange={e => setBill(e.target.valueAsNumber)}
        />
      </form>
    </div>
  );
};

export const MyOpinion = ({ myOpinion, setMyOpinion }) => {
  return (
    <div className={styles.addForm}>
      <h3>How did you like the service?</h3>
      <select
        className={styles.form__title}
        value={myOpinion}
        onChange={e => setMyOpinion(e.target.value)}
      >
        <option defaultValue={0} value={0}>
          Choose...
        </option>
        <option value={0}>Disastisfied (0%)</option>
        <option value={0.05}>It was okay (5%)</option>
        <option value={0.1}>It was good (10%)</option>
        <option value={0.2}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

export const FriendOpinion = ({ friendOpinion, setFriendOpinion }) => {
  return (
    <div className={styles.addForm}>
      <h3>How did your friend like the service?</h3>
      <select
        className={styles.form__title}
        value={friendOpinion}
        onChange={e => setFriendOpinion(e.target.value)}
      >
        <option defaultValue={0} value={0}>
          Choose...
        </option>
        <option value={0}>Disastisfied (0%)</option>
        <option value={0.05}>It was okay (5%)</option>
        <option value={0.1}>It was good (10%)</option>
        <option value={0.2}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

export const Result = ({ bill, myOpinion, friendOpinion }) => {
  const media = (myOpinion * bill + friendOpinion * bill) / 2;
  const total = bill + media;
  return <div>{`You Pay $${total} ($${bill} + $${media} tip)`}</div>;
};

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [myOpinion, setMyOpinion] = useState(0);
  const [friendOpinion, setFriendOpinion] = useState(0);
  function handleReset() {
    setBill(0);
    setMyOpinion(0);
    setFriendOpinion(0);
  }
  return (
    <div className={styles.container}>
      <BillInput bill={bill} setBill={setBill} />
      <MyOpinion myOpinion={myOpinion} setMyOpinion={setMyOpinion} />
      <FriendOpinion
        friendOpinion={friendOpinion}
        setFriendOpinion={setFriendOpinion}
      />
      <Result bill={bill} myOpinion={myOpinion} friendOpinion={friendOpinion} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TipCalculator;

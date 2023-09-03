import styles from '@styles';
import { useState } from 'react';

export const BillInput = ({ onSetBill, bill }) => {
  return (
    <div className={`${styles.paddings}`}>
      <form className="flex flex-rows justify-center items-center">
        <h3 className="text-2xl p-4">How much was the bill?</h3>
        <input
          className="w-fit bg-white text-black border-none border-xl px-2 py-2 font-medium text-xl cursor-pointer"
          type="number"
          placeholder="Enter bill..."
          value={bill}
          onChange={e => onSetBill(e.target.valueAsNumber)}
        />
      </form>
    </div>
  );
};

export const SelectPercentage = ({ opinion, onSelect, text }) => {
  return (
    <div className={`${styles.paddings}`}>
      <div className="flex flex-rows justify-center items-center">
        <h3 className="text-2xl p-4">{text}</h3>
        <select
          className="w-fit bg-white text-black border-none border-xl px-2 py-2 font-medium text-xl cursor-pointer"
          value={opinion}
          onChange={e => onSelect(Number(e.target.value))}
        >
          <option defaultValue="0" value="0">
            Choose...
          </option>
          <option value="0">Disastisfied (0%)</option>
          <option value="0.05">It was okay (5%)</option>
          <option value="0.1">It was good (10%)</option>
          <option value="0.2">Absolutely amazing! (20%)</option>
        </select>
      </div>
    </div>
  );
};

export const Output = ({ bill, tip }) => {
  return (
    <div className={`${styles.paddings} flex flex-row self-center`}>
      <div className="text-2xl font-bold p-4">{`You Pay $${
        bill + tip
      } ($${bill} + $${tip} tip)`}</div>
    </div>
  );
};

export const Reset = ({ onReset }) => {
  return (
    <div className={`${styles.paddings} flex self-center`}>
      <button className={`${styles.button}`} onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

const TipCalculator = () => {
  const [bill, setBill] = useState('');
  const [opinion1, setOpinion1] = useState(0);
  const [opinion2, setOpinion2] = useState(0);

  const tip = opinion1 * bill + opinion2 * bill;

  function handleReset() {
    setBill('');
    setOpinion1(0);
    setOpinion2(0);
  }
  return (
    <div
      className={`${styles.centerPosition} w-1/3 flex flex-col justify-start items-start bg-[#dfdad6] rounded-2xl drop-shadow-2xl p-6`}
    >
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage
        opinion={opinion1}
        onSelect={setOpinion1}
        text="How did you like the service?"
      />
      <SelectPercentage
        opinion={opinion2}
        onSelect={setOpinion2}
        text="How did your friend like the service?"
      />
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
};

export default TipCalculator;

import styles from './Steps.module.css';
import { useState } from 'react';

const FirstStep = ({ step }) => {
  return <p>{`Step ${step}: Learn React 🧪`}</p>;
};
const SecondStep = ({ step }) => {
  return <p>{`Step ${step}: Enjoy the right 🏋️‍♀️ `}</p>;
};
const ThirdStep = ({ step }) => {
  return <p>{`Step ${step}: Make friends 🙌`}</p>;
};

const Steps = () => {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(currentState => currentState - 1);
  }
  function handleNext() {
    if (step < 3) setStep(currentState => currentState + 1);
  }

  return (
    <div className={styles.container}>
      {open && (
        <div className={styles.steps}>
          <div className={styles.numbers}>
            <span
              className={
                step >= 1 ? styles.stepNumberActive : styles.stepNumberNormal
              }
            >
              1
            </span>
            <span
              className={
                step >= 2 ? styles.stepNumberActive : styles.stepNumberNormal
              }
            >
              2
            </span>
            <span
              className={
                step === 3 ? styles.stepNumberActive : styles.stepNumberNormal
              }
            >
              3
            </span>
          </div>
          <div className={styles.messageContainer}>
            {step === 1 ? (
              <FirstStep step={step} />
            ) : step === 2 ? (
              <SecondStep step={step} />
            ) : (
              <ThirdStep step={step} />
            )}
          </div>

          <div className={styles.buttonsContainer}>
            <button onClick={handlePrevious}>Previous</button>

            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(currentState => !currentState)}
        className={styles.close}
      >
        &times;
      </button>
    </div>
  );
};

export default Steps;

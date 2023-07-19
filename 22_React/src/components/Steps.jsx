import { useState } from 'react';

const FirstStep = ({ step }) => {
  return <p className="message">{`Step ${step}: Learn React 🧪`}</p>;
};
const SecondStep = ({ step }) => {
  return <p className="message">{`Step ${step}: Enjoy the right 🏋️‍♀️`}</p>;
};
const ThirdStep = ({ step }) => {
  return <p className="message">{`Step ${step}: Make friends 🙌`}</p>;
};

const Steps = () => {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <span
          className={
            step >= 1
              ? 'step-number--active number'
              : 'step-number--normal number'
          }
        >
          1
        </span>
        <span
          className={
            step >= 2
              ? 'step-number--active number'
              : 'step-number--normal number'
          }
        >
          2
        </span>
        <span
          className={
            step === 3
              ? 'step-number--active number'
              : 'step-number--normal number'
          }
        >
          3
        </span>
      </div>
      {step === 1 ? (
        <FirstStep step={step} />
      ) : step === 2 ? (
        <SecondStep step={step} />
      ) : (
        <ThirdStep step={step} />
      )}

      <div className="buttons-container">
        <button onClick={handlePrevious}>Previous</button>

        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Steps;

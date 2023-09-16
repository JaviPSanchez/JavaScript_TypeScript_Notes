import styles from '@styles';
import { useState } from 'react';

const FirstStep = ({ step }) => {
  return (
    <p className="text-4xl font-Rubik font-bold">{`Step ${step}: Learn React 🧪`}</p>
  );
};
const SecondStep = ({ step }) => {
  return (
    <p className="text-4xl font-Rubik font-bold">{`Step ${step}: Enjoy the voyage 🏋️‍♀️ `}</p>
  );
};
const ThirdStep = ({ step }) => {
  return (
    <p className="text-4xl font-Rubik font-bold">{`Step ${step}: Make friends 🙌`}</p>
  );
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
    <div
      className={`${styles.centerPosition} min-w-[400px] min-h-[300px] flex flex-col justify-center items-center bg-orangeLightess rounded-2xl drop-shadow-2xl p-6`}
    >
      {open && (
        <>
          <div className="flex justify-between gap-6 text-2xl relative m-10">
            <span
              className={
                step >= 1
                  ? 'h-[4rem] w-[4rem] bg-[#aa41e7] p-2 rounded-full text-white font-bold text-4xl text-center'
                  : 'h-[4rem] w-[4rem] bg-[#f0edf1] p-2 rounded-full text-black font-bold text-4xl text-center'
              }
            >
              1
            </span>
            <span
              className={
                step >= 2
                  ? 'h-[4rem] w-[4rem] bg-[#aa41e7] p-2 rounded-full text-white font-bold text-4xl text-center'
                  : 'h-[4rem] w-[4rem] bg-[#f0edf1] p-2 rounded-full text-black font-bold text-4xl text-center'
              }
            >
              2
            </span>
            <span
              className={
                step === 3
                  ? 'h-[4rem] w-[4rem] bg-[#aa41e7] p-2 rounded-full text-white font-bold text-4xl text-center'
                  : 'h-[4rem] w-[4rem] bg-[#f0edf1] p-2 rounded-full text-black font-bold text-4xl text-center'
              }
            >
              3
            </span>
          </div>
          <div className="text-black font-bold text-center m-10">
            {step === 1 ? (
              <FirstStep step={step} />
            ) : step === 2 ? (
              <SecondStep step={step} />
            ) : (
              <ThirdStep step={step} />
            )}
          </div>

          <div className="flex justify-between items-center m-10 text-2xl gap-6">
            <Button
              className="text-white bg-[#aa41e7] w-fit  rounded-xl p-2"
              onClick={handlePrevious}
            >
              <span>👈</span>Previous
            </Button>
            <Button
              className="text-white bg-[#aa41e7] w-fit rounded-xl p-2"
              onClick={handleNext}
            >
              Next<span>👉</span>
            </Button>
          </div>
        </>
      )}
      <button
        onClick={() => setOpen(currentState => !currentState)}
        className="absolute w-20 h-20 text-center text-6xl text-white bg-[#aa41e7] rounded-full top-[-50px] right-[-50px] "
      >
        &times;
      </button>
    </div>
  );
};

function Button({ className, onClick, children }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Steps;

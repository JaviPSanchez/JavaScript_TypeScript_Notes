import styles from '@styles';
import { useState } from 'react';
import data from '@data';

export const FriendsList = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div className="col-start-1 col-end-2 row-start-1 row-end-3">
      {data.map(item => {
        return (
          <div
            key={item.id}
            className={`w-full h-28 flex flex-row justify-start items-center ${
              selected ? 'bg-orangeLight' : 'bg-transparent'
            } p-4 rounded-lg`}
          >
            <img
              className="rounded-full"
              src={item.urlImage}
              alt="Description of the image"
            />
            <div className="w-full flex flex-col justify-center items-start px-6">
              <span className="w-full text-xl">{item.userName}</span>
              <p
                className={`text-xl ${
                  item.balance >= 0 ? 'text-red-400' : 'text-green-600'
                }`}
              >
                You own Clark 7€
              </p>
            </div>
            <div className="">
              <button
                onClick={() => setSelected(!selected)}
                className="w-full bg-orangeMedium hover:bg-orangeDark text-[#343a40] font-bold px-4 py-2 border-none text-2xl rounded-lg transition-all duration-300"
              >
                {selected ? 'Close' : 'Select'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const AddFriend = () => {
  return (
    <form className="bg-orangeLight grid gap-6 grid-cols-2 grid-rows-3">
      <div className="flex flex-row items-center col-start-1 col-end-3 p-4">
        <label className="w-3/5 text-2xl font-bold mr-4">🧑‍🤝‍🧑Friend name</label>
        <input className="w-ful text-2xl col-start-2 col-end-3 bg-white border-[0.2px] border-grey3 rounded-lg p-4"></input>
      </div>
      <div className="flex flex-row items-center col-start-1 col-end-3 p-4">
        <label className="w-3/5 text-2xl font-bold mr-4">🌄 Image URL</label>
        <input
          className="w-full text-2xl col-start-2 col-end-3 bg-white border-[0.2px] border-grey3 rounded-lg p-4"
          placeholder="https://i.pravatar.cc/48"
        ></input>
      </div>
      <div className="col-start-2 col-end-3 p-4">
        <button className="w-full bg-orangeMedium hover:bg-orangeDark text-[#343a40] font-bold px-4 py-2 border-none text-2xl rounded-lg transition-all duration-300">
          Add
        </button>
      </div>
    </form>
  );
};

export const SplitBill = () => {
  return (
    <div className="bg-orangeLight col-start-2 col-end-3 row-start-1 row-end-3">
      <h2 className="text-4xl uppercase font-bold mt-4 p-6">
        Split a bill with Javi
      </h2>
      <form className="grid gap-6 grid-cols-2 grid-rows-4">
        <div className="flex flex-row items-center col-start-1 col-end-3 p-4">
          <label className="w-2/3 text-2xl font-bold mr-4">💰 Bill value</label>
          <input className="w-1/3 text-2xl col-start-2 col-end-3 bg-white border-[0.2px] border-grey3 rounded-lg p-4"></input>
        </div>
        <div className="flex flex-row items-center col-start-1 col-end-3 p-4">
          <label className="w-2/3 text-2xl font-bold mr-4">
            🧍‍♀️ Your expense
          </label>
          <input className="w-1/3 text-2xl col-start-2 col-end-3 bg-white border-[0.2px] border-grey3 rounded-lg p-4"></input>
        </div>
        <div className="flex flex-row items-center col-start-1 col-end-3 p-4">
          <label className="w-2/3 text-2xl font-bold mr-4">
            🧑‍🤝‍🧑Sarah`s expense
          </label>
          <input className="w-1/3 text-2xl col-start-2 col-end-3 bg-white border-[0.2px] border-grey3 rounded-lg p-4"></input>
        </div>
        <div className="flex flex-row items-center col-start-1 col-end-3 p-4">
          <label className="w-2/3 text-2xl font-bold mr-4">
            😊 Who is paying the bill?
          </label>
          <select className="w-1/3 text-2xl col-start-2 col-end-3 bg-white border-[0.2px] border-grey3 rounded-lg p-4">
            <option>You</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex flex-row items-center col-start-2 col-end-3 p-4">
          <button className="w-full bg-orangeMedium hover:bg-orangeDark text-[#343a40] font-bold px-4 py-2 border-none text-2xl rounded-lg transition-all duration-300">
            Split bill
          </button>
        </div>
      </form>
    </div>
  );
};
const EatAndSplit = () => {
  return (
    <div
      className={`${styles.centerPosition} min-w-[750px] min-h-[500px] flex flex-col justify-start items-start bg-orangeLightess rounded-2xl drop-shadow-2xl p-6`}
    >
      <div className="w-full min-h-[500px] grid gap-6 grid-cols-2 grid-rows-3">
        <FriendsList />
        <SplitBill />
        <AddFriend />
      </div>
    </div>
  );
};

export default EatAndSplit;

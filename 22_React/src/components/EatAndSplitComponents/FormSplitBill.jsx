import { useState } from 'react';
import { Button } from '@components';

const SplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const [whoIsPaying, setWhoIsPaying] = useState('input');

  const paidByFriend = bill ? bill - paidByUser : '';

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  }

  return (
    <div className="bg-orangeLight rounded-xl min-w-[400px]">
      <h2 className="text-4xl uppercase font-bold mt-4 p-6 font-Rubik">
        Split a bill with {selectedFriend.name}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 grid-cols-2 grid-rows-4"
      >
        <div className="flex flex-row items-center col-start-1 col-end-3 p-4">
          <label className="w-full text-2xl font-bold">💰 Bill value</label>
          <input
            type="text"
            value={bill}
            onChange={e => setBill(Number(e.target.value))}
            className="w-full text-2xl col-start-2 col-end-3 bg-white border-[0.2px] border-grey3 rounded-lg p-4"
          />
        </div>
        <div className="flex flex-row items-center col-start-1 col-end-3 p-4">
          <label className="w-full text-2xl font-bold">🧍‍♀️ Your expense</label>
          <input
            type="text"
            value={paidByUser}
            onChange={e =>
              setPaidByUser(
                Number(e.target.value) >= bill
                  ? paidByUser
                  : Number(e.target.value),
              )
            }
            className="w-full text-2xl col-start-2 col-end-3 bg-white border-[0.2px] border-grey3 rounded-lg p-4"
          />
        </div>
        <div className="flex flex-row items-center col-start-1 col-end-3 p-4">
          <label className="w-full text-2xl font-bold">
            🧑‍🤝‍🧑 {selectedFriend.name} expense
          </label>
          <input
            value={paidByFriend}
            disabled
            className="cursor-not-allowed w-full text-2xl col-start-2 col-end-3 bg-grey4 opacity-50 border-[0.2px] border-grey3 rounded-lg p-4"
          />
        </div>
        <div className="flex flex-row items-center col-start-1 col-end-3 p-4">
          <label className="w-full text-2xl font-bold">
            😊 Who is paying the bill?
          </label>
          <select
            value={whoIsPaying}
            onChange={e => setWhoIsPaying(e.target.value)}
            className="w-full text-2xl col-start-2 col-end-3 bg-white border-[0.2px] border-grey3 rounded-lg p-4"
          >
            <option value="input">Choose</option>
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
          </select>
        </div>
        <div className="flex flex-row items-center col-start-2 col-end-3 p-4">
          <Button customStyle={'w-full'}>Split Bill</Button>
        </div>
      </form>
    </div>
  );
};

export default SplitBill;

import { useState } from 'react';

const AddFriend = ({ onAddFriend }) => {
  const [newFriend, setNewFriend] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!newFriend) return;

    let randomNumber = Math.floor(Math.random() * 900000) + 100000;

    const newItem = {
      id: randomNumber,
      userName: newFriend,
      urlImage: `https://i.pravatar.cc/48?u=${randomNumber}`,
    };
    onAddFriend(newItem);
    setNewFriend([]);
  }

  function handleTargetId(e) {
    console.log(e.target.id);
  }

  return (
    <form
      className="bg-orangeLight grid gap-6 grid-cols-2 grid-rows-3"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-row items-center col-start-1 col-end-3 p-4">
        <label className="w-3/5 text-2xl font-bold mr-4">🧑‍🤝‍🧑Friend name</label>
        <input
          className="w-ful text-2xl col-start-2 col-end-3 bg-white border-[0.2px] border-grey3 rounded-lg p-4"
          type="text"
          placeholder="Enter name"
          value={newFriend}
          onChange={e => setNewFriend(e.target.value)}
        />
      </div>
      <div className="flex flex-row items-center col-start-1 col-end-3 p-4">
        <label className="w-3/5 text-2xl font-bold mr-4">🌄 Image URL</label>
        <input
          className="w-full text-2xl col-start-2 col-end-3 bg-white border-[0.2px] border-grey3 rounded-lg p-4"
          placeholder="https://i.pravatar.cc/48"
        />
      </div>
      <div className="col-start-2 col-end-3 p-4">
        <button
          onClick={handleTargetId}
          className="w-full bg-orangeMedium hover:bg-orangeDark text-[#343a40] font-bold px-4 py-2 border-none text-2xl rounded-lg transition-all duration-300"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddFriend;

import { useState } from 'react';
import { Button } from '@components';

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    let id = crypto.randomUUID();

    const newFriend = {
      id,
      name: name,
      image: `${image}?u=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);

    setName('');
    setImage('https://i.pravatar.cc/48');
  }

  return (
    <form
      className="w-full bg-orangeLight my-4 rounded-xl flex flex-col justify-center items-end"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex flex-row justify-between items-center p-4">
        <label className="text-2xl font-bold mr-4">🥳 Friend name</label>
        <input
          className="text-2xl bg-white border-[0.2px] border-grey3 rounded-lg p-4"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="w-full flex flex-row justify-between items-center p-4">
        <label className="text-2xl font-bold mr-4">🌄 Image URL</label>
        <input
          type="text"
          className="text-2xl bg-white border-[0.2px] border-grey3 rounded-lg p-4"
          placeholder="https://i.pravatar.cc/48"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
      </div>
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;

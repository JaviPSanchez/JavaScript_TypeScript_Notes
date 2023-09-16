import { useState } from 'react';

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription('');
    setQuantity(1);
  }

  return (
    <form
      className="bg-[#e5771f] px-0 py-6 flex justify-center items-center gap-4"
      onSubmit={handleSubmit}
    >
      <h3>What do you need for your 😍 trip?</h3>
      <select
        className="w-fit bg-[#ffebb3] text-[#5a3e2b] border-none rounded-2xl font-bold cursor-pointer p-4"
        value={quantity}
        onChange={e => setQuantity(+e.target.value)}
      >
        {Array.from({ length: 10 }, (_, index) => index + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        className="w-fit bg-[#ffebb3] text-[#5a3e2b] border-none rounded-2xl font-bold cursor-pointer p-4"
        type="text"
        placeholder="Item..."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button className="w-fit bg-[#76c7ad] uppercase text-[#5a3e2b] border-none rounded-2xl font-bold cursor-pointer p-4">
        Add
      </button>
    </form>
  );
};

export default Form;

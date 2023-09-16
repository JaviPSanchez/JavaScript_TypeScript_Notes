const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li className="flex justify-center items-center gap-4">
      <input
        className="h-[2rem] w-[2rem]  accent-[#e5771f]"
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span
        className="flex justify-between items-center p-2 gap-4"
        style={item.packed ? { textDecoration: 'line-through' } : {}}
      >
        <span>{item.quantity}</span>
        <span>{item.description}</span>
      </span>

      <button
        onClick={() => onDeleteItem(item.id)}
        className="bg-none text-2xl"
      >
        ❌
      </button>
    </li>
  );
};

export default Item;

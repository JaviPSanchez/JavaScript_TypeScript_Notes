const Friend = ({ item, num, selected, onSelected }) => {
  const open = num === selected;

  const handleSelected = function () {
    onSelected(open ? null : num);
  };

  return (
    <li
      key={item.key}
      className={`w-full h-28 flex flex-row justify-start items-center ${
        open ? 'bg-orangeLight' : 'bg-transparent'
      } p-4 rounded-lg mt-4`}
    >
      <img className="rounded-full" src={item.urlImage} alt={item.userName} />
      <div className="w-full flex flex-col justify-center items-start px-6">
        <span className="w-full text-xl">{item.userName}</span>
        <p
          className={`text-xl ${
            item.balance > 0
              ? 'text-red-400'
              : item.balance < 0
              ? 'text-green-600'
              : item.balance === 0
              ? 'text-black'
              : 'text-black'
          }`}
        >
          {item.balance > 0
            ? `You own ${item.userName} ${Math.abs(item.balance)}€`
            : item.balance < 0
            ? `${item.userName} owes you ${Math.abs(item.balance)}€`
            : `You and ${item.userName} are even`}
        </p>
      </div>
      <div className="">
        <button
          onClick={handleSelected}
          className="w-full bg-orangeMedium hover:bg-orangeDark text-[#343a40] font-bold px-4 py-2 border-none text-2xl rounded-lg transition-all duration-300"
        >
          {open ? 'Close' : 'Select'}
        </button>
      </div>
    </li>
  );
};

export default Friend;

const SplitBill = ({ items, selected }) => {
  console.log(items);
  console.log(selected);

  const friend = items.filter(item => item.id === selected);
  console.log(friend);

  return (
    <div
      className={`${
        selected === null
          ? 'hidden bg-orangeLight col-start-2 col-end-3 row-start-1 row-end-3'
          : 'bg-orangeLight col-start-2 col-end-3 row-start-1 row-end-3'
      }`}
    >
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
            🧑‍🤝‍🧑Sarah`s {friend.userName} expense
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

export default SplitBill;

const SplitBill = ({ selectedFriend }) => {
  return (
    <div className="bg-orangeLight rounded-xl">
      <h2 className="text-4xl uppercase font-bold mt-4 p-6 font-Rubik">
        Split a bill with {selectedFriend.name}
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
            🧑‍🤝‍🧑 {selectedFriend.name} expense
          </label>
          <input className="w-1/3 text-2xl col-start-2 col-end-3 bg-white border-[0.2px] border-grey3 rounded-lg p-4"></input>
        </div>
        <div className="flex flex-row items-center col-start-1 col-end-3 p-4">
          <label className="w-2/3 text-2xl font-bold mr-4">
            😊 Who is paying the bill?
          </label>
          <select className="w-1/3 text-2xl col-start-2 col-end-3 bg-white border-[0.2px] border-grey3 rounded-lg p-4">
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
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

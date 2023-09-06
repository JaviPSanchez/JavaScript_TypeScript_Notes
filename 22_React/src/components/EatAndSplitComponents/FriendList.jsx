import { useState } from 'react';

const FriendList = ({ items }) => {
  console.log(items);
  const [selected, setSelected] = useState(false);
  return (
    <div className="col-start-1 col-end-2 row-start-1 row-end-3">
      {items.map(item => {
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

export default FriendList;

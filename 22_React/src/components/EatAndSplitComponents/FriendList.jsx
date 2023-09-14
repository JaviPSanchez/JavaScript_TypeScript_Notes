import Friend from './Friend';

const FriendList = ({ items, onSelected, selected, open, onOpen }) => {
  return (
    <div className="flex flex-col items-end">
      <ul className="w-full col-start-1 col-end-2 row-start-1 row-end-3">
        {items.map((item, index) => (
          <Friend
            item={item}
            key={item.id}
            num={index}
            selected={selected}
            onSelected={onSelected}
          />
        ))}
      </ul>
      <button
        onClick={() => onOpen(!open)}
        className={`${
          !open ? '' : 'hidden'
        } w-2/5 mt-6 bg-orangeMedium hover:bg-orangeDark text-[#343a40] font-bold px-4 py-2 border-none text-2xl rounded-lg transition-all duration-300
        `}
      >
        Add Friend
      </button>
    </div>
  );
};

export default FriendList;

import { Button } from '@components';

const Friend = ({ friend, onSelection, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li
      className={`w-full h-28 flex flex-row justify-start items-center ${
        isSelected ? 'bg-orangeLight' : 'bg-transparent'
      } p-4 rounded-lg mt-4 hover:bg-orangeLight transition-all duration-300`}
    >
      <img className="rounded-full" src={friend.image} alt={friend.name} />
      <div className="w-full flex flex-col justify-center items-start px-6">
        <span className="w-full text-xl">{friend.name}</span>
        <p
          className={`text-xl ${
            friend.balance > 0
              ? 'text-red-400'
              : friend.balance < 0
              ? 'text-green-600'
              : friend.balance === 0
              ? 'text-black'
              : 'text-black'
          }`}
        >
          {friend.balance > 0
            ? `You own ${friend.name} ${Math.abs(friend.balance)}€`
            : friend.balance < 0
            ? `${friend.name} owes you ${Math.abs(friend.balance)}€`
            : `You and ${friend.name} are even`}
        </p>
      </div>
      <div>
        <Button onClick={() => onSelection(friend)}>
          {isSelected ? 'Close' : 'Select'}
        </Button>
      </div>
    </li>
  );
};

export default Friend;

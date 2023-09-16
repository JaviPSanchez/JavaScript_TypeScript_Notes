import Friend from './Friend';

const FriendList = ({ friends, onSelection, selectedFriend }) => {
  // console.log(selectedFriend.id);
  return (
    <ul className="w-full">
      {friends.map(friend => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendList;

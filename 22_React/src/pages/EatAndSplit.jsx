import styles from '@styles';
import { useState } from 'react';
import { FriendList, FormAddFriend, FormSplitBill, Button } from '@components';
import { initialFriends } from '@data';

const EatAndSplit = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleAddFriend(item) {
    setFriends(initialFriends => [...initialFriends, item]);
    setShowAddFriend(false);
  }

  function handleShowFriend() {
    setShowAddFriend(show => !show);
  }

  function handleSelection(friend) {
    setSelectedFriend(currentState =>
      currentState?.id === friend.id ? null : friend,
    );
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends(currentFriends =>
      currentFriends.map(friend =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );

    setSelectedFriend(null);
  }

  return (
    <div
      className={`${styles.centerPosition} min-w-[800px] min-h-[600px] flex flex-row justify-start items-start gap-6 bg-orangeLightess rounded-2xl drop-shadow-2xl p-6`}
    >
      <div className="w-1/2 flex flex-col justify-center items-start">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowFriend}>
          {showAddFriend ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
};

export default EatAndSplit;

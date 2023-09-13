import Friend from './Friend';

const FriendList = ({ items }) => {
  console.log(items);
  return (
    <ul className="col-start-1 col-end-2 row-start-1 row-end-3">
      {items.map(item => (
        <Friend item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default FriendList;

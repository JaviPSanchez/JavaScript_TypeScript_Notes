const Stats = ({ items }) => {
  if (!items.length)
    return (
      <em className="bg-[#76c7ad] font-bold text-center p-6 flex justify-center items-center">
        Start adding items to your packing list ✌️!
      </em>
    );
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  console.log(percentage);

  return (
    <footer className="bg-[#76c7ad] font-bold text-center p-6 flex justify-center items-center">
      <em>
        {percentage !== 100
          ? `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`
          : `You got everything! Ready to go 😊`}
      </em>
    </footer>
  );
};

export default Stats;

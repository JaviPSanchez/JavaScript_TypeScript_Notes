const Item = ({ num, title, currentOpen, onOpen, children }) => {
  const open = num === currentOpen;

  const handleToggel = function () {
    onOpen(open ? null : num);
  };

  return (
    <div
      className={`${
        !open
          ? 'w-[58rem] flex flex-row rounded-2xl p-6 bg-white mt-4 cursor-pointer'
          : 'border-t-2 border-solid border-[#087f5b] mt-6'
      } `}
      onClick={handleToggel}
    >
      <div className="bg-white w-full flex flex-row justify-between items-center">
        <p
          className={`${
            open ? 'text-[#087f5b]' : 'text-[#ced4da]'
          } text-5xl p-4`}
        >{`0${num + 1}`}</p>
        <p className={`${open ? 'text-[#087f5b]' : 'text-black'} text-3xl p-2`}>
          {title}
        </p>
        <p
          className={`${
            open ? 'text-[#087f5b]' : 'text-black '
          } p-4 text-6xl bg-transparent`}
        >
          {open ? '-' : '+'}
        </p>
      </div>
      {open && (
        <div className="flex justify-center items-center w-[58rem] h-[10rem] bg-white p-4 text-start text-xl cursor-pointer">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
};

export default Item;

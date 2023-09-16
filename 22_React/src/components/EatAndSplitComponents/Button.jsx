function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="place-self-end w-fit m-6 bg-orangeMedium hover:bg-orangeDark text-[#343a40] font-bold px-4 py-2 border-none text-2xl rounded-lg transition-all duration-300
  "
    >
      {children}
    </button>
  );
}

export default Button;

export const SearchButton = (props) => {
  const { children, onClick } = props;
  return (
    <div>
      <button className='rounded-full bg-gray-400 bg-opacity-50 w-11 h-11 text-center mr-3 hover:bg-opacity-80' onClick={onClick}>{children}</button>
    </div>
  );
};

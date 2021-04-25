import { memo } from "react";

export const SearchButton = memo((props) => {
  const { children, onClick, isSearchable } = props;
  return (
    <div>
      {isSearchable ? (
        <button className='rounded-full bg-gray-400 bg-opacity-50 w-11 h-11 text-center mr-3 focus:outline-none hover:bg-opacity-80' onClick={onClick} >{children}</button>
      ) : (
        <button className='rounded-full bg-gray-400 bg-opacity-50 w-11 h-11 text-center mr-3 cursor-not-allowed' onClick={onClick} disabled>{children}</button>
      )}
    </div>
  );
});

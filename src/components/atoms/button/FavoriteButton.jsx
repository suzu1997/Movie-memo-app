import { memo } from "react";

export const FavoriteButton = memo((props) => {
  const { children } = props;
  return <button className='text-gray-700 bg-yellow-200 text-sm p-3 rounded-lg mt-3 hover:bg-opacity-80 focus:outline-none'>{props.children}</button>;
});

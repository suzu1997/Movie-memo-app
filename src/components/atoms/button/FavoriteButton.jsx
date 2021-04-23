export const FavoriteButton = (props) => {
  const { children } = props;
  return <button className='text-gray-700 bg-yellow-200 text-sm p-3 rounded-lg mt-3 hover:bg-opacity-80'>{props.children}</button>;
};

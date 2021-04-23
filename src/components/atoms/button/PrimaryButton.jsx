export const PrimaryButton = (props) => {
  const { children, type } = props;
  return (
    <button className='text-white bg-green-700 text-sm p-3 border-none outline-none rounded-lg hover:bg-opacity-90' type={type}>
      {children}
    </button>
  );
};

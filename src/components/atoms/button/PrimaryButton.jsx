import { memo } from "react";

export const PrimaryButton = memo((props) => {
  const { children, type } = props;
  return (
    <button className='text-white bg-green-700 text-sm p-3 focus:outline-none rounded-lg hover:bg-opacity-90' type={type}>
      {children}
    </button>
  );
});

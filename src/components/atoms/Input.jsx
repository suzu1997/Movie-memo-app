export const Input = (props) => {
  const { label, placeholder } = props;
  return (
    <div>
      {label ? <label>{`${label}: `}</label> : null}
      <br />
      <input className='w-full p-2 border rounded-sm border-gray-500 border-solid' placeholder={placeholder} />
    </div>
  );
};

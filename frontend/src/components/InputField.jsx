const InputField = ({ placeholder, name, handleChange }) => {
  return (
    <input
      className="w-[90%] h-[40px] rounded-2xl pl-4 border border-black"
      placeholder={placeholder}
      name={name}
      onChange={handleChange}
    />
  );
};

export default InputField;

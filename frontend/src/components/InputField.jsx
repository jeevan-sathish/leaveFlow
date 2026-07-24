const InputField = ({
  type = "text",
  placeholder,
  name,
  value,
  handleChange,
}) => {
  return (
    <input
      className="w-full h-12.5  rounded-2xl pl-4 border border-black"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
      required
    />
  );
};

export default InputField;

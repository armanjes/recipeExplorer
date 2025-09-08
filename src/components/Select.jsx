const Select = ({ options, defaultOption, value, onChange }) => {

  return (
    <select
      className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500"
      value={value}
      onChange={onChange}
    >
      <option value="">{defaultOption}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
export default Select;

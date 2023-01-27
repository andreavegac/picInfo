const Input = ({ attribute, handleChange, param }) => {
  return (
    <input
      id={attribute.id}
      name={attribute.name}
      placeholder={attribute.placeholder}
      type={attribute.type}
      onChange={(e) => handleChange(e.target.value)}
      className={param ? "input-error" : "regular-style"}
    />
  );
};

export default Input;

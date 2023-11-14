const CustomInput = ({
  className,
  value,
  setState,
  type,
  placeholder,
  label,
  title,
}) => {
  return (
    <div className={className}>
      <div className="publish-label">
        <label htmlFor={label}>{title}</label>
      </div>
      <div className="publish-input">
        <input
          id={label}
          type={type}
          placeholder={placeholder}
          onChange={(event) => {
            setState(event.target.value);
          }}
          value={value}
        />
      </div>
    </div>
  );
};

export default CustomInput;

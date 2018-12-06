import React from "react";

const InputField = ({
  placeholder,
  name,
  type,
  error,
  label,
  onChange,
  value,
  myStyles,
  autoFocus
}) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        style={myStyles}
        autoFocus={autoFocus}
      />
      {error && <p className="error-tag">{error}</p>}
    </div>
  );
};

export default InputField;

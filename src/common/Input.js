import React from "react";

const Input = ({ value, onBlur, onChange }) => (
  <input type="number" value={value} onChange={onChange} onBlur={onBlur} />
);

export default Input;

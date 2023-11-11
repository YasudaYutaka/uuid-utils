import React from "react";

// A reusable input component that takes a value and onChange function as props
function Input({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input type="text" class="form-control" value={value} onChange={handleChange} />
  );
}

export default Input;
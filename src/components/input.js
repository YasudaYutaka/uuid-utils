import React from "react";

/** 
 * A reusable input component that displays a UUID input field and a button to generate a new UUID.
 * 
 * @param {string} value - The current value of the input field.
 * @param {function} onChange - A function to be called when the input field value changes.
 */ 
function Input({value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value)
  }

  return (
    <div class="mb-3 px-5 w-25 d-flex flex-column justify-content-center align-items-center">
      <div class="input-group d-flex">
        <input type="text" class="form-control input-purple" value={value} placeholder="UUID" onChange={handleChange} />
        <div class="input-group-append">
          <button class="btn-green" onClick={copyToClipboard}><i class="bi bi-copy fs-5"></i></button>
        </div>
      </div>
    </div>
  );
}

export default Input;
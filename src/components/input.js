import React from "react";
import {v4 as uuidv4} from 'uuid';

/** 
 * A reusable input component that displays a UUID input field and a button to generate a new UUID.
 * 
 * @param {string} value - The current value of the input field.
 * @param {function} onChange - A function to be called when the input field value changes.
 * @param {function} onNewUUID - A function to be called when a new UUID is generated.
 * @param {string} prependText - The text to display before the input field.
 * @param {string} buttonText - The text to display on the button.
 */ 
function Input({ prependText, value, onChange, onNewUUID, buttonText }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const generateUUID = () => {
    onNewUUID(uuidv4());
  }

  return (
    <div class="input-group mb-3 px-5 w-50 d-flex justify-content-center align-items-center">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default">{prependText}</span>
      </div>
      <input type="text" value={value} class="form-control" onChange={handleChange} />
      <div class="input-group-append">
        <button class="input-group-text btn-info white-text-btn" type="button" onClick={generateUUID}>{buttonText}</button>
      </div>
    </div>
  );
}

export default Input;
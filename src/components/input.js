import React, { useState } from "react";

/** 
 * A reusable input component that displays a UUID input field and a button to generate a new UUID.
 * 
 * @param {string} value - The current value of the input field.
 * @param {function} onChange - A function to be called when the input field value changes.
 */ 
function Input({value, onChange }) {
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    onChange(event.target.value);
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  }

  return (
    <div class="mb-3 px-5 w-25 d-flex flex-column justify-content-center align-items-center">
      {showAlert && (
        <div className="alert alert-success w-100 text-center" role="alert">
          UUID copiado!
        </div>
      )}
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
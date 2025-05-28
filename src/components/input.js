import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

/** 
 * A reusable input component that displays a UUID input field and a button to generate a new UUID.
 * 
 * @param {string} value - The current value of the input field.
 * @param {function} onChange - A function to be called when the input field value changes.
 */ 
function Input({value, onChange }) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (event) => {
    onChange(event.target.value);
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setSnackbarOpen(true); 
  }

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div class="mb-3 px-5 w-50 d-flex flex-column justify-content-center align-items-center">
      <div class="input-group d-flex">
        <input type="text" class="form-control input-purple" value={value} placeholder="UUID" onChange={handleChange} />
        <div class="input-group-append">
          <button class="btn-green" onClick={copyToClipboard}><i class="bi bi-copy fs-5"></i></button>
        </div>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: "100%" }}>
          Copied to clipboard!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Input;
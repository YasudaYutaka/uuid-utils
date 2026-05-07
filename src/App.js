import './App.css';
import React, { useState } from "react";
import Input from "./components/input";
import Button from './components/button';
import { addHyphen, removeHyphen, validateUUIDWithoutHyphen, validateUUID } from "./utils/uuidUtils";
import { toUppercase, toLowercase } from "./utils/stringUtils";
import {v4 as uuidv4} from 'uuid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function App() {
  const [uuid, setUuid] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  const setInputAndResult = (uuid) => {
    if (validateUUID(uuid) || validateUUIDWithoutHyphen(uuid)) {
      setUuid(uuid);
    } else {
      setSnackbarOpen(true);
    }

  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  }

  const transformUUID = (functionToCall) => {
    const result = functionToCall(uuid);
    setInputAndResult(result);
  }

  const generateUUID = () => {
    setInputAndResult(uuidv4());
  }

  const handleToUppercase = () => transformUUID(toUppercase);

  const handleToLowercase = () => transformUUID(toLowercase);

  const handleAddHyphen = () => transformUUID(addHyphen);

  const handleRemoveHyphen = () => transformUUID(removeHyphen);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="medium mb-3 fw-bold">
          UUID Utils
        </h1>
        <Input value={uuid} onChange={setUuid} />
        <div role="group" aria-label="UUID transformation actions">
          <button class="btn white-text-btn btn-purple m-1" type="button" onClick={generateUUID}>Generate UUID</button>
          <Button icon={<i className="bi bi-plus"></i>} text="Add Hyphen" onClick={handleAddHyphen} />
          <Button icon={<i className="bi bi-dash"></i>} text="Remove Hyphen" onClick={handleRemoveHyphen} />
          <Button icon={<i class="bi bi-arrow-up"></i>} text="To Uppercase" onClick={handleToUppercase} />
          <Button icon={<i class="bi bi-arrow-down"></i>} text="To Lowercase" onClick={handleToLowercase} />
        </div>
      </header>
      <div className="devbox-banner">
        <div className="devbox-banner__content">
          <span className="devbox-banner__title">UUID Utils is now part of DevBox 🚀</span>
          <span className="devbox-banner__desc">A collection of simple developer tools like UUID Generator, JSON Formatter, Text Diff and more.</span>
        </div>
        <a
          href="https://yasudayutaka.github.io/devbox/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-purple devbox-banner__cta"
        >
          Open DevBox <i className="bi bi-box-arrow-up-right"></i>
        </a>
      </div>
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
          Invalid UUID!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;

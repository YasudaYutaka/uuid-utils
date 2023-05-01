import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [uuid, setUuid] = useState([]);
  const [uuidResult, setUuidResult] = useState([]);

  const handleChange = (event) => {
    setUuid(event.target.value)
  }

  const validateUUID = () => {
    const pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    let isUUID = pattern.test(uuid)
    if(isUUID) {
      return true
    } else {
      setUuidResult("Invalid UUID")
      return false
    }
  }

  const validateUUIDWithoutHyphen = () => {
    const pattern = /^[0-9a-f]{8}[0-9a-f]{4}[0-5][0-9a-f]{3}[089ab][0-9a-f]{3}[0-9a-f]{12}$/i
    let isUUIDWithoutHyphen = pattern.test(uuid)
    if(isUUIDWithoutHyphen) {
      return true
    } else {
      setUuidResult("Invalid UUID Without Hyphen")
      return false
    }
  }

  const addHyphen = () => {
    if(validateUUIDWithoutHyphen()) {
      const uuidWithHyphen = [uuid.slice(0, 8), '-', uuid.slice(8, 12), '-',
                              uuid.slice(12, 16), '-', uuid.slice(16, 20), '-',
                              uuid.slice(20)].join('')
      setUuidResult(uuidWithHyphen)
    }
  }

  const removeHyphen = () => {
    if(validateUUID()) {
      const uuidWithoutHyphen = uuid.replaceAll('-', '')
      setUuidResult(uuidWithoutHyphen)
    }
  }

  const toUppercase = () => {
    const uppercase = uuid.toUpperCase()
    setUuidResult(uppercase)
  }

  const toLowercase = () => {
    const lowercase = uuid.toLowerCase()
    setUuidResult(lowercase)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          UUID Converter
        </p>
        <p>{uuidResult}</p>
        <label for="uuid">UUID</label>
        <input type="text" id="uuid" onChange={handleChange} name="uuid" />
        <button onClick={addHyphen}>Add Hyphen</button>
        <button onClick={removeHyphen}>Remove Hyphen</button>
        <button onClick={toUppercase}>To Uppercase</button>
        <button onClick={toLowercase}>To Lowercase</button>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [uuid, setUuid] = useState([]);
  const [uuidResult, setUuidResult] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const validateUUID = () => {
    const pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    let isUUID = pattern.test(uuid)
    if(isUUID) {
      const uuidWithoutHyphen = uuid.replaceAll('-', '')
      setUuidResult(uuidWithoutHyphen)
    } else {
      setUuidResult("Invalid UUID")
    }
  }

  const handleChange = (event) => {
    setUuid(event.target.value)
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
        <form onSubmit={handleSubmit}>
          <label for="uuid">UUID</label>
          <input type="text" id="uuid" onChange={handleChange} name="uuid" />
          <button onClick={validateUUID}>Remove Hyphen</button>
        </form>
      </header>
    </div>
  );
}

export default App;

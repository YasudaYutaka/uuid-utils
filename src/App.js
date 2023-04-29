import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [uuid, setUuid] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  //02e466aa-cf20-44cf-af5b-45572bfebc87
  const validateUUID = () => {
    // problem 
    const matches = uuid.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i)
    if(true) {
      setUuid("matches")
    } else {
      setUuid("s")
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          UUID Conversor
        </p>
        <p>{uuid}</p>
        <form onSubmit={handleSubmit}>
          <label for="uuid">UUID</label>
          <input type="text" id="uuid" name="uuid" />
          <button onClick={validateUUID}>Remove Hyphen</button>
        </form>
      </header>
    </div>
  );
}

export default App;

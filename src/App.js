import './App.css';
import React, { useState } from "react";
import Input from "./components/input";
import Button from './components/button';
import Result from './components/result';
import { addHyphen, removeHyphen, validateUUIDWithoutHyphen, validateUUID } from "./utils/uuidUtils";
import { toUppercase, toLowercase } from "./utils/stringUtils";

function App() {
  const [uuid, setUuid] = useState([]);
  const [uuidResult, setUuidResult] = useState([]);
  
  const setInputAndResult = (uuid) => {
    if (validateUUID(uuid) || validateUUIDWithoutHyphen(uuid)) {
      setUuid(uuid);
    }
    setUuidResult(uuid);
  }

  const transformUUID = (functionToCall) => {
    const result = functionToCall(uuid);
    setInputAndResult(result)
  }

  const handleToUppercase = () => transformUUID(toUppercase);

  const handleToLowercase = () => transformUUID(toLowercase);

  const handleAddHyphen = () => transformUUID(addHyphen);

  const handleRemoveHyphen = () => transformUUID(removeHyphen);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="medium">
          UUID Utils
        </h1>
        <Result resultText={uuidResult} />
        <Input prependText={"UUID"} value={uuid} onChange={setUuid} onNewUUID={setInputAndResult} buttonText={"Generate a new UUID"} />
        <div  role="group" aria-label="Basic example">
          <Button icon={<i className="bi bi-plus"></i>} text="Add Hyphen" onClick={handleAddHyphen} />
          <Button icon={<i className="bi bi-dash"></i>} text="Remove Hyphen" onClick={handleRemoveHyphen} />
          <Button icon={<i class="bi bi-arrow-up"></i>} text="To Uppercase" onClick={handleToUppercase} />
          <Button icon={<i class="bi bi-arrow-down"></i>} text="To Lowercase" onClick={handleToLowercase} />
        </div>
      </header>
    </div>
  );
}

export default App;

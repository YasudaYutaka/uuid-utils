import './App.css';
import React, { useState } from "react";
import Input from "./components/input";
import Button from './components/button';
import Result from './components/result';
import { addHyphen, removeHyphen } from "./utils/uuidUtils";
import { toUppercase, toLowercase } from "./utils/stringUtils";

function App() {
  const [uuid, setUuid] = useState([]);
  const [uuidResult, setUuidResult] = useState([]);

  const setInputAndResult = (functionToCall) => {
    const result = functionToCall(uuid);
    setUuid(result);
    setUuidResult(result);
  }

  const handleToUppercase = () => setInputAndResult(toUppercase);

  const handleToLowercase = () => setInputAndResult(toLowercase);

  const handleAddHyphen = () => setInputAndResult(addHyphen);

  const handleRemoveHyphen = () => setInputAndResult(removeHyphen);

  return (
    <div className="App">
      <header className="App-header">
        <p className="medium">
          UUID Converter
        </p>
        <Result resultText={uuidResult} />
        <div class="input-group mb-3 px-5">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">UUID</span>
          </div>
          <Input value={uuid} onChange={setUuid} />
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <Button text="Add Hyphen" onClick={handleAddHyphen} />
          <Button text="Remove Hyphen" onClick={handleRemoveHyphen} />
          <Button text="To Uppercase" onClick={handleToUppercase} />
          <Button text="To Lowercase" onClick={handleToLowercase} />
        </div>
      </header>
    </div>
  );
}

export default App;

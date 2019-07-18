import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";

import {init} from "../shared/store/app";

const App = () => {
  const [counter, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  });

  function handleClick() {
    setCount(counter + 1);
  }

  return (
    <div>
      <h1>React Plus Server-Side Rendering Setup</h1>
      <span>Clicked: {counter}</span>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default App;

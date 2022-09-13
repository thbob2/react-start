/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import './styles/css/main.css';
function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      This was made from Scratch! Also hello world!
      <button onClick={increment}>Increment</button>
      {counter}
    </div>
  );
}

export default App;

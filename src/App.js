import React from 'react';
import './style.css';

import { useState, useEffect } from 'react';
import UseEffectDemo from './Components/UseEffectDemo';
import IntervalHookDemo from './Components/IntervalHookDemo';

export default function App({ roomId }) {
  const [display, setDisplay] = useState(true);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <>
      <h1>Click Button to toggle Mouse Position</h1>
      <button onClick={handleClick}>Click Me</button>
      {/* {display && <UseEffectDemo />} */}

      {display && <IntervalHookDemo />}
    </>
  );
}

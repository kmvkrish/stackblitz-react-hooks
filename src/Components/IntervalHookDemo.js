import React, { useState, useEffect } from 'react';

export default function IntervalHookDemo() {
  const [counter, setCounter] = useState(0);

  const tick = () => {
    setCounter((counter) => counter + 1);
  };

  useEffect(() => {
    console.log('useEffect 1: Runs only once');

    const interval = setInterval(tick, 1000);

    return () => {
      console.log('Clearing interval');
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <p>Counter: {counter} </p>
    </>
  );
}

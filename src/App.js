import React, { useState } from 'react';
import './style.css';

import { recipes as data } from './data/data.js';
import RecipeItem from './Components/RecipeItem.js';

export default function App({ roomId }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => alert('Submitting');

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="button" value="Submit" onClick={handleSubmit} />
      </form>
    </>
  );
}

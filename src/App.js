import React from 'react';
import './style.css';

import { data } from './data/data.js';
import { utils } from './utils/utils.js';

export default function App({ roomId }) {
  const chemists = data.filter(
    (professor) => professor.profession === 'chemist'
  );

  const others = data.filter((professor) => professor.profession !== 'chemist');

  return (
    <>
      <ul>
        <h3>Chemists</h3>
        {chemists.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
      <ul>
        <h3>Everyone Else</h3>
        {others.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

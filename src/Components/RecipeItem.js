import React, { Fragment } from 'react';

export default function RecipeItem({ id, name, ingredients }) {
  return (
    <Fragment>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

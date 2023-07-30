import React from 'react';
import './style.css';

import { recipes as data } from './data/data.js';
import RecipeItem from './Components/RecipeItem.js';

export default function App({ roomId }) {
  return (
    <>
      <h1>Recipes</h1>
      {data.map((recipe, index) => (
        <RecipeItem
          key={index}
          id={recipe.id}
          name={recipe.name}
          ingredients={recipe.ingredients}
        />
      ))}
    </>
  );
}

import React from "react";

export default function Recipe ({name, ingredients, stpes}) {
  return (
    <section id="baked-salom">
      <h1>{}name</h1>
      <ul className="ingredients">
      {ingredients.map((ingredient, i) => (
      <li key={i}>{ingredient.name}</li>
      ))}
      </ul>
      <section className="instructions">
        <h2>Cookin Instructions</h2>
        {stpes.map ((step, i) =>(
          <p key={i}>{step}</p>
        ))}
      </section>
    </section>
  )
}
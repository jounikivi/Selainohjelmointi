import React from 'react'
import { Ingredient } from './Ingredient'

export const IngredientsList = ({list}) => {
  return (
    <ul className='ingredients'>
      {list.map ((Ingredient, i) => (
        <Ingredient key={i} {... Ingredient} />
      ))}
    </ul>
  )
}

export default IngredientsList;

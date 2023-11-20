import React from 'react'

export const Ingredient = ({amount, measurement, name}) => {
  return (
    <li>
      {amount} {measurement} {name}
    </li>
  )
}

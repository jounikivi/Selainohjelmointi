import React from 'react'
import Recipe from './Recipe'

export const Menu = () => {
  return (
    <article>
      <header>
        <h1>Delicuous Recipe</h1>
        </header>
        <div className='recipes'>
          {Recipe.map ((props, i) => (
            <Recipe key={i} {...props} />
          ))}
        </div>
      
    </article>
  )
}

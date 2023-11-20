import React from 'react'

export const Instructions = () => {
  return (
    <section className="instructions">
    <h2>{title}</h2>
    {steps.map ((s, i) =>(
      <p key={i}>{s}</p>
    ))}
  </section>
  )
}

export default Instructions;

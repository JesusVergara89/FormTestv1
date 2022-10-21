import React from 'react'
import './card.css'

const Card = ({user}) => {
  return (
    <article className="card-main">

        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
        <h3>{user.age}</h3>

    </article>
  )
}

export default Card
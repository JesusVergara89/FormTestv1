import React from 'react'
import './card.css'

const Card = ({ user }) => {
  return (
    <article className="card-main">
      <img src={`https://dog.ceo/api/breed/${user }Bulldog/images/random`} alt="" />
    </article>
  )
}

export default Card
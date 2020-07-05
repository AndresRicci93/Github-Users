import React from 'react'
import Card from './Card/Card'



const CardList = props => (
  <div>
    {props.cards.map(card => (
      <Card {...card} />
    ))}
  </div>
)

export default CardList
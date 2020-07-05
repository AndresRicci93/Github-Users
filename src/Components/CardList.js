import React from 'react'
import Card from './Card/Card'



const CardList = props => (
  <div>
    {props.cards.map((card, index) => (
      <Card key={index} card={card} />
    ))}
  </div>
)

export default CardList

import React from 'react'
import Card from './Card/Card'





const CardList = (props) => (
  <div>
<<<<<<< HEAD
    {props.cards.map((card,index) =>  (
      
      <Card removeCard={props.removeCard} key={index} cardIndex={index} card={card} />

=======
    {props.cards.map((card, index) => (
      <Card removeCard={props.removeCard} key={index} cardIndex={index} card={card} />
>>>>>>> 5eb3a48205fbc4e6dc20aee5718f7f82fcd7474e
    ))}
  </div>
)

export default CardList

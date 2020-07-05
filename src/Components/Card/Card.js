import React from 'react';


const Card = ({ card, cardIndex,removeCard }) => {

  return (
    <div style={{ margin: '1em' }}>

      <img alt="avatar" style={{ width: '70px' }} src={card.avatar_url} /> 

      <div>


        <div style={{ fontWeight: 'bold' }}>{card.name}</div>
        <div>{card.bio}</div>
        <div>{card.location}</div>
        <div>{card.blog}</div>
        <div>{card.followers}</div>


        <button onClick={() => removeCard(cardIndex)}>Delete</button>



      </div>
    </div>
  )

}

export default Card;

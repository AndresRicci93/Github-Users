import React from 'react';
// import DelButton from '../DelButton/DelButton'

// const Remove = (card) => {
//   let card = card.target.value;

// }

// arr.splice(index,1);

const Card = ({ card, cardIndex, removeCard }) => {

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

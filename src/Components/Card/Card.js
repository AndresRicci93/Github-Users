import React from 'react';
<<<<<<< HEAD

=======
// import DelButton from '../DelButton/DelButton'
>>>>>>> 5eb3a48205fbc4e6dc20aee5718f7f82fcd7474e


<<<<<<< HEAD
const Card = ({ card, cardIndex,removeCard }) => {

  return (
    <div style={{ margin: '1em' }}>

      <img alt="avatar" style={{ width: '70px' }} src={card.avatar_url} /> 

      <div>


=======
// }

// arr.splice(index,1);

const Card = ({ card, cardIndex, removeCard }) => {

  return (
    <div style={{ margin: '1em' }}>
      <img alt="avatar" style={{ width: '70px' }} src={card.avatar_url} />
      <div>
>>>>>>> 5eb3a48205fbc4e6dc20aee5718f7f82fcd7474e
        <div style={{ fontWeight: 'bold' }}>{card.name}</div>
        <div>{card.bio}</div>
        <div>{card.location}</div>
        <div>{card.blog}</div>
        <div>{card.followers}</div>
<<<<<<< HEAD


        <button onClick={() => removeCard(cardIndex)}>Delete</button>



=======
        <button onClick={() => removeCard(cardIndex)}>Delete</button>
>>>>>>> 5eb3a48205fbc4e6dc20aee5718f7f82fcd7474e
      </div>
    </div>
  )

}

export default Card;

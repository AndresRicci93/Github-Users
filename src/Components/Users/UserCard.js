import React from 'react';
import './UserCard.css'

const UserCard = ({ card,cardIndex,removeCard }) => {
  console.log(card);
  return (


    <div className="card">

      <img src={card.avatar_url} alt=""/>
      <h1>{card.login}</h1>
      <a href={card.html_url}>Link to the repo</a>
      <button onClick={() => removeCard(cardIndex)}>Delete</button>
    </div>
     
  );
};

export default UserCard;


import React from 'react';
// import DelButton from '../DelButton/DelButton'

// const Remove = (card) => {
//   let card = card.target.value;

// }

const Card = props => {

  return (
    <div style={{ margin: '1em' }}>
      <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
      <div>

        <div style={{ fontWeight: 'bold' }}>{props.name}</div>
        <div>{props.bio}</div>
        <div>{props.location}</div>
        <div>{props.blog}</div>
        <div>{props.followers}</div>
      </div>
    </div>
  )

}

export default Card;

import React from 'react'
import './UserList.css';
import UserCard from '../Users/UserCard.js'

const UserList = (props) => {


    return props.cards.length <= 0 ? 'loading users...' : (

      <div className="container">

        <section className="user-cards">
          
        {props.cards.map((card,index) =>  (
      
      <UserCard removeCard={props.removeCard} key={index} cardIndex={index} card={card} />

    ))}
        </section>
      </div>

      )
}

export default UserList

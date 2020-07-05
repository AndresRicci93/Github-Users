import React, { useState } from 'react'
import Form from './Components/Form'
import CardList from './Components/CardList'

const App = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = cardInfo => {
    // push
    setCards(cards.concat(cardInfo))
  }

  const removeCard = index => {
    setCards(cards.filter(item => item !== cards.splice(index, 1)));
  }

  // [] it will run only once!
  // useEffect(() => {
  //   console.log('i just mounted!');
  // }, [])

  // this will watch out for state changes
  // useEffect(() => {
  //   console.log('this runs when cards update');
  //   setCards(cards);
  // }, [cards])

  return (
    <div>
      <Form onSubmit={addNewCard} />
      <CardList removeCard={removeCard} cards={cards} />
    </div>
  )
}



export default App;

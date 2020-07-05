import React, { useState} from 'react'
import Form from './Components/Form'
import CardList from './Components/CardList'

const App = () => {

  const [cards, setCards] = useState([])
  
  console.log(cards);


  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  

  }

  //  useEffect(() => {
  //    console.log('i just mounted');
  //  }, [])

  // //this will watch out for state  changes
  //  useEffect(() => {
  //    console.log('this runs when cards update');
  //    setCards(cards);
  //  }, [cards])

  const removeCard = index => {

    console.log('this is coming from App.js' ,index);
    
    //splice function to remove the card

    let removedCard = cards.splice(index, 1);
    let remainingCards = cards.filter(item => item !== removedCard)
    setCards(remainingCards);
    
  }

  return (
    <div>
      <Form onSubmit={addNewCard} />
      <CardList removeCard={removeCard} cards={cards} />
    </div>
  )
}



export default App;

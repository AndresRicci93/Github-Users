import React, { useState,useEffect} from 'react'
import axios from 'axios';
import UserList from './Components/UserList/UserList'

const App = () => {

  const [cards, setCards] = useState([])
  
  useEffect(() => {
    
    const fetchUsers = async () => {
      const result = await axios(`https://api.github.com/users`);     
      setCards(result.data);
    };
    
    fetchUsers();
  }, []);
  const removeCard = index => {

    console.log('this is coming from App.js' , index);
    
    //splice function to remove the card

    let removedCard = cards.splice(index, 1);
    let remainingCards = cards.filter(item => item !== removedCard)
    setCards(remainingCards);
    
  }

  return (
    <div>
      
      <UserList removeCard={removeCard} cards={cards} />
    </div>
  )
}



export default App;

import React, { useState,useEffect} from 'react'
import axios from 'axios';
import UserList from './Components/UserList/UserList'
import SearchBar from './Components/UI/SearchBar'

const App = () => {

  const [cards, setCards] = useState([])

  const [query, setQuery] = useState('')


  useEffect(() => {
    
    const fetchUsers = async () => {
      const result = await axios(`https://api.github.com/users/${query}`);     
      
      console.log(result.data.id);
      
      setCards(result.data);


    };
    
    fetchUsers();
  }, [query]);

  const removeCard = index => {

    console.log('this is coming from App.js :' ,  index);
    
    //splice function to remove the card

    let removedCard = cards.splice(index, 1);
    let remainingCards = cards.filter(item => item !== removedCard)
    setCards(remainingCards);
    
  }

  return (
    <div>

      <SearchBar getQuery={(q) => setQuery(q)}/>
      <UserList removeCard={removeCard} cards={cards} />

    </div>
  )
}



export default App;

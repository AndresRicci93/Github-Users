import React, { useState } from 'react'
import axios from 'axios'

const Form = props => {
  const [username, setUsername] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    axios.get(`https://api.github.com/users/${username}`).then(resp => {
      props.onSubmit(resp.data)
      setUsername('')
<<<<<<< HEAD
     // console.log(resp.data);
=======
      // console.log(resp.data);
>>>>>>> 5eb3a48205fbc4e6dc20aee5718f7f82fcd7474e
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <button type="submit">Add card</button>
    </form>
  )
}

export default Form

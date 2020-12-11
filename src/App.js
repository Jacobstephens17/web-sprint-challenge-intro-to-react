import React, { useState, useEffect}  from 'react'
import axios from 'axios'
import CharacterList from './components/CharacterList'
import styled from 'styled-components'

function App() {
  const  [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get('https://swapi.py4e.com/api/people/')
      .then((res) =>{
        console.log(res.data.results)
        setCharacters(res.data.results)
    })
  },[])

  return (
    <div>
      <CharacterList characters={ characters } />
    </div>
  );
}

export default App;

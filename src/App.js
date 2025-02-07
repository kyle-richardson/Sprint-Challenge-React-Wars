import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios"
import Person from "./Person.js"
import styled from "styled-components"

const App = () => {
  const Button = styled.button`
    border: 1px solid black;
    background-color: rgba(255,255,255,.7);
    &:hover {
      background-color: white;
    }
    cursor: pointer;
    padding: 5px;
    width: 90px;
    margin: 0 5px;
    border-radius: 2px;
  `
  const [fullObject, setFullObject] = useState({})
  const [characters, setCharacters] = useState([])
  const [nextPage, setNextPage] = useState("https://swapi.co/api/people")
  
  useEffect(()=> {
    !!nextPage && 
    axios
      .get(nextPage)
      .then(response => {
        setFullObject(response.data)
        setCharacters(response.data.results)
      })
      .catch(err => console.log(err))
  }, [nextPage])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Button 
        className={!fullObject.previous && 'hide'} 
        onClick={()=> setNextPage(fullObject.previous)}>
          {`<- Previous`}
      </Button>
      <Button 
        className={!fullObject.next && 'hide'} 
        onClick={()=> setNextPage(fullObject.next)}>
          {`Next ->`}
      </Button>
      {characters.map(person=> {
        return (
          <Person key={person.name} person={person}/>
        )
      })}
      <Button 
        className={!fullObject.previous && 'hide'} 
        onClick={()=> setNextPage(fullObject.previous)}>
          {`<- Previous`}
      </Button>
      <Button 
        className={!fullObject.next && 'hide'} 
        onClick={()=> setNextPage(fullObject.next)}>
          {`Next ->`}
      </Button>

    </div>
  );
}

export default App;



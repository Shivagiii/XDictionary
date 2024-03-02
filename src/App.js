
import { useState } from 'react';
import './App.css';

function App() {

  const [text,setWord] = useState('');
  const [found,setFound]=useState([])
  
  const dictionary=
  [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." }
  
  ]
  
  function handleSearch(e){
    e.preventDefault();
    let meanings=dictionary.find((words) => words.word.toLowerCase() === text.toLowerCase())  
   setFound(meanings)

  }
  return (
    <div className="App">
      <h2>Dictionary App</h2>
      <form onSubmit={handleSearch}>
      <input type="text" value={text} placeholder="Search for a word" onChange={(e) => setWord(e.target.value)}/>
      <button type="submit" >Search</button>
      </form>
      <h4>Defination:</h4>
      <p>{found? found.meaning:"Word not found in the dictionary."}</p>     
    </div>
  );
}

export default App;

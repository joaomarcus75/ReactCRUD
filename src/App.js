//import logo from './logo.svg';
import './App.css';
//import React from 'react';
import React ,{useState} from 'react';
import ItemsList from './ItemsList';

function App() {
const myItemsList = ['item 1', 'item 2', 'item 3'];

  return (
   <div className='App'>
    <MyComponent/>
    <ItemsList items = {myItemsList}/>
   </div>
  );
}

function MyComponent()
{
  const [text, setText] = useState('Hello World!');
  const handleClick = () => {
    setText('The text was changed!');
  }
  return(
    <div>
      <h1>{text}</h1>
      <button onClick={handleClick}>Clique Aqui</button>
    </div>
  );
}

export default App;
  
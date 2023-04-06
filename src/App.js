//import logo from './logo.svg';
import './App.css';
//import React from 'react';
import React ,{useState} from 'react';

function App() {
  return (
   <div className='App'>
    <MyComponent/>
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
  
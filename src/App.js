import logo from './logo.svg';
import './App.css';
import React from 'react';
import Simpson from './components/Simpson';
import axios from 'axios';

/*const quoteSimpson = {
  character: "bart",
  quote: 'hello',
  }*/

function App() {
  const [quote, setQuote] = React.useState("");

  const getQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')  
      .then((response) => response.data)  
      .then((data) => {
        console.log(data);
        setQuote(data[0]);
      });
  };

  return (
    <div className="App">
    <Simpson quote={quote}/>
    <button type="button" onClick={getQuote}>New Quote</button>
    </div>

  );
}

export default App;

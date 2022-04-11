import logo from './logo.svg';
import './App.css';
import React from 'react';
import Simpson from './components/Simpson';

const quoteSimpson = {

  character: "bart",
  quote: 'hello',
  }

function App() {
  const [quote, setQuote] = React.useState(setQuote);

  return (
    <div className="App">
    <Simpson quote={quoteSimpson}/>
    </div>

  );
}

export default App;

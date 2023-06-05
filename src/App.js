import React from 'react';
import { useState } from 'react';
import  { evaluate } from 'mathjs';
import './App.css';
import Buttons from './components/Buttons';
import Inputs from './components/Inputs';
function App() {
  const [text,setText]=useState('');
  const [result,setResult]=useState('');

  const calculateResult=()=>{
    const input =text.join("");
    setResult(evaluate(input))
  }
  const addtoText=(val)=>{
    setText((text)=>[...text,val+' '])
  }
  const resetInput=()=>{
    setText('')
    setResult('')
  }
  return (
    <div className="App">

  <div className='calc-wrapper'>
    <Inputs text={text} result={result}/>
    <div className='row'>
    <Buttons symbol="7" handleClick={addtoText}/>
    <Buttons symbol="8"handleClick={addtoText}/>
    <Buttons symbol="9"handleClick={addtoText}/>
    <Buttons symbol="/" color="#385773" handleClick={addtoText}/>
    </div>
    <div className='row'>
    <Buttons symbol="4"handleClick={addtoText}/>
    <Buttons symbol="5"handleClick={addtoText}/>
    <Buttons symbol="6"handleClick={addtoText}/>
    <Buttons symbol="*" color="#385773" handleClick={addtoText}/>
    </div>
    <div className='row'>
    <Buttons symbol="1"handleClick={addtoText}/>
    <Buttons symbol="2"handleClick={addtoText}/>
    <Buttons symbol="3"handleClick={addtoText}/>
    <Buttons symbol="+" color="#385773" handleClick={addtoText}/>
    </div>
    <div className='row'>
    <Buttons symbol="0"handleClick={addtoText}/>
    <Buttons symbol="."handleClick={addtoText}/>
    <Buttons symbol="=" handleClick={calculateResult}/>
    <Buttons symbol="-" color="#385773"handleClick={addtoText}/>
    </div>
    <Buttons symbol="Clear"color="#BF2011" handleClick={resetInput}/>
  </div>
      
    </div>
  );
}

export default App;

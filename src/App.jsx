import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState();
  const [history, setHistory] = useState([]);
  const [lastValue, setLastValue] = useState('');
  const [show, setShow] = useState({key1: false, key2: false});
  const [click, setClick] = useState(0);
  
  const handleChange1 = (e) => {
    setNum1(e.target.value);
    setShow(prev => ({ ...prev, key1: false, key2: false }));
  }
  const handleChange2 = (e) => {
    setNum2(e.target.value);
    setShow(prev => ({ ...prev, key1: false, key2: false }));
  }

  const addition = () => {
    const result = parseInt(num1) + parseInt(num2);
    setResult(result);
    setHistory([...history, result]);
    setLastValue('');
    setShow(prev => ({ ...prev, key1: true, key2: false}));;
  }

  const subtraction = () => {
    const result = parseInt(num1) - parseInt(num2);
    setResult(result);
    setHistory([...history, result]);
    setLastValue('');
    setShow(prev => ({ ...prev, key1: true, key2: false }));;
  }

  const multiplication = () => {
    const result = parseInt(num1) * parseInt(num2)
    setResult(result);
    setHistory([...history, result]);
    setLastValue('');
    setShow(prev => ({ ...prev, key1: true, key2: false}));;
  }

  const division = () => {
    if(parseInt(num2) === 0)
    {
      setResult("Cannot divide by zero");
      setLastValue('');
      setShow(prev => ({ ...prev, key1: true, key2: false }));;
    }
    else 
    { 
        const result = parseInt(num1) / parseInt(num2)
        setResult(result);
        setHistory([...history, result]);
        setLastValue('');
        setShow(prev => ({ ...prev, key1: true, key2: false }));;
    }
  }
  const printHistory = () => {
   
   setShow(prev => ({...prev, key1: true, key2: true}));
   setClick(click + 1);
   if(click === 0)
  {
    setLastValue(history.pop());
    setLastValue(history.pop());
  }
  else
    setLastValue(history.pop());
  }
  

  const reset = () => {
    setNum1('');
    setNum2('');
    setResult(0);
    setLastValue('');
    setShow(prev => ({...prev, key1: false, key2: false}));
  }

 
  return (
      <div className = "main-box">
        <button className="button1" onClick={printHistory}>Back</button>
        <button className="button1" onClick={reset}>AC</button>
        <br/><br/>
        <input type="text" placeholder = "Enter first number" className = "input-1" value={num1} onChange={handleChange1}></input>
        <br/><br/>
        <input type="text" placeholder = "Enter second number" className = "input-2" value={num2} onChange={handleChange2}></input>
        <br/><br/>
        <button className="button" onClick={addition} >Add</button>
        <button className="button" onClick={subtraction}>Subtract</button>
        <button className="button" onClick={multiplication}>Multiply</button>
        <button className="button" onClick={division}>Divide</button>
        <br></br>
        {(show.key1 || show.key2) && (
      <div>
      {show.key1 && <p>Result : {result}</p>}
      {show.key2 && <p>History : {lastValue}</p>}
    </div>
)}

  </div>
  )
}
export default App;

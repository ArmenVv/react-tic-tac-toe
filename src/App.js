import './App.css';
import { use, useState } from 'react';
import List from './List';
function App() {
  const [input,setInput] = useState("");
  const [inputs,setInputs] = useState([]);
  const handleChange = (event) => {
      setInput(event.target.value);
      console.log(input);
  }
  const addInput = () =>{
    if(input){
      setInputs([...inputs,input]);
      setInput("");
    }
  }
  return (
    <div className='App'>
        <h1>List</h1>
       <input type='text' onChange={handleChange} value={input}></input>
       <button onClick={addInput}>Add</button>
       <ol>
          <List {...inputs}
          />
       </ol>
    </div>
  )
}

export default App;

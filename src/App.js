import './App.css';
import { use, useState } from 'react';
import Switching from './Switch';
import SwitchingStatus from './SwitchingStatus';

function App(){
  const [Status,setStatus] = useState(false)
  
  const handleClick = () => {
    setStatus(!Status);
  }
  return(
    <div className='App'>
       <Switching status = {Status}/>
       <button onClick={handleClick}>
         <SwitchingStatus status={Status}/>
       </button>
    </div>
  )
}

export default App;

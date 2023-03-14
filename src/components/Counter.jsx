import {useState} from 'react'

function Counter() {
  const [counter,setCounter] = useState(0);

  const increase = ()=> {
    setCounter(counter+1);
    
  }

  const decrease = () => {
    setCounter(counter-1);
    if(counter<=0){
      setCounter(0);
    }
  }
  
 
  return (
  
    <div>
      <h1>
      Counter
      </h1>
      <br />
      <br />
      <h2>
        {counter}
      </h2>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase}>Increase</button>
      
    </div>
    
  )
 
}

export default Counter
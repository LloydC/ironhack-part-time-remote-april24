import { useState } from 'react';
import Test from './Test';

function Counter() {
    const [counter, setCounter] = useState(()=> 0)
    const [title, setTitle] = useState("Counter")

    console.log('counter', counter);

    const increaseCounter = () => {
        setCounter(counter+1)
        // counter ++ --> counter = counter +1
    }

    // const decreaseCounter = () => {
    //     setCounter(counter-1)
    // }

  return (
    <div className="Counter">
      <h2>{title}</h2>

      <p>You clicked {counter} times</p>

      <button onClick={() => setCounter(counter -1)}> - </button>
      <button onClick={increaseCounter}> + </button>
      <Test count={counter} />
    </div>
  );
}

export default Counter;

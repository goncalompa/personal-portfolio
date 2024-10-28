import { useState } from "react";

function Counter() {
  
    const [count, setCount] = useState(0);

    let currentCount = count;

    const increaseCount = () => { setCount(currentCount + 1) }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increaseCount}>Increase count</button>
        </div>
    );
}

export default Counter;
import './Loading.css'
import { useState, useEffect } from "react"

function Loading() {

    const [message, setMessage] = useState(false);

    const [time, setTime] = useState(5);

    useEffect(() => {

        const interval = setInterval(() => {setTime(time - 1)}, 1000);

        setTimeout(() => { setMessage(true) }, 5500);

        if (time <= 0) { clearInterval(interval); }

        return () => clearInterval(interval);

    }, [time]);

    if (message) {
        return <h2 className='Loading-text'>Gonçalo Antunes</h2>
    }
    else {
        return (
            <div>
                <h2 className='Loading-text'>Loading awesomeness...</h2>
                <h2 className='Loading-text'>Please wait {time}s</h2>
            </div>
        )
    }
}

export default Loading

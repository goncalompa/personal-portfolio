import './Loading.css'
import { useState, useEffect } from "react"

function Loading() {

    const [message, setMessage] = useState("Loading awesomeness... Please wait");

    const [time, setTime] = useState(5);

    useEffect(() => {

        const interval = setInterval(() => {setTime(time - 1)}, 1000);

        setTimeout(() => { setMessage("Gonçalo Antunes") }, 5500);

        if (time <= 0) { clearInterval(interval); }

        return () => clearInterval(interval);

    }, [time]);

    return (
        <h2 className="Loading-text">{message} {time > 0 ? time : ''}</h2>
    );
}

export default Loading

import React, {useState} from 'react';
import messages from "./messages"
import "./Eightball.css";

const Eightball = () => {
    const [message, setMessage] = useState('Think of a question.');
    const [color, setColor] = useState('black');
    const genRandom = () => Math.floor(Math.random() * messages.length);
    const askQuestion = () => {
        const answerIdx = genRandom();
        console.log('answeridx is ', answerIdx);
        console.log("set message should become ", messages[answerIdx])
        setMessage(messages[answerIdx]['msg']);
        setColor(messages[answerIdx]['color']);
    }
    
    return (
        <div className="Eightball" style={{backgroundColor: color}}>
            <h4 className='message'>{message}</h4>
            <button onClick={askQuestion} className='btn'>Ask a Question</button>
        </div>
    )

}

export default Eightball;
import React from "react";
import {useState} from 'react';
import './App.css';

function App(){
    const[num, setNumber] = useState(0);
    return (
        <div class = "App">
            <h1>This is the counter App</h1>
            <h1>{num}</h1>
            <button onClick = {() => setNumber(num + 1)}>Add</button>
        </div>
    )
}
export default App;
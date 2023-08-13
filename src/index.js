import React from 'react';
import ReactDOM from 'react-dom/client';
import Data from './Data';
import {useState} from 'react';
function App(){
    const[num, setNumber] = useState(0);
    return (
        <div>
            <h1>{num}</h1>
            <button onClick = {() => setNumber(num + 1)}>Add</button>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        <Data />
    </React.StrictMode>
)
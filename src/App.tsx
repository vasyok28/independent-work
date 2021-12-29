import React, {useState} from 'react';
import {Counter} from "./CounterComponent/Counter/Counter";
import './App.css';

function App() {
    const [defaultAddition, maxAddition] = [0, 5];
    const [counter, setCounter] = useState<number>(defaultAddition);

    return (
        <div className="App">
            <Counter defaultAddition={defaultAddition} maxAddition={maxAddition} counter={counter}
                     setCounter={setCounter}/>
        </div>
    );
}

export default App;

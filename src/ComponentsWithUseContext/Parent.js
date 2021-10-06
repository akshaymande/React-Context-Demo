import React, { createContext, useContext, useState } from 'react';
import Child1 from './Child1';

export const CountContext = createContext(0);

const Parent = () => {
    const [count, setCount] = useState(0);
    return (
        <CountContext.Provider value={count}>
            <div>
                <h1>Parent:- {count}</h1>
                <button onClick={() => setCount(count + 1)}>
                    Add
                </button>
                <Child1 />
              
            </div>
        </CountContext.Provider>
    )
}

export default Parent;
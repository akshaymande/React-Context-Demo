import React, { useContext } from "react";
import Child2 from "./Child2";
import { CountContext } from "./Parent";

const Child1 = () => {

    const count = useContext(CountContext);
    return (
        <div className='child-box-1'>
            <h1>Child1:- {count}</h1>
            <Child2 />

        </div>
    )
}

export default Child1;
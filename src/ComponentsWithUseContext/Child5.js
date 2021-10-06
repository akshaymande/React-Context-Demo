import React, { useContext } from "react";
import { CountContext } from "./Parent";

const Child5 = () => {
    const count = useContext(CountContext)
    return (
        <div className='child-box-5'>
            <h1>Child5 {count}</h1>
        </div>
    )
}

export default Child5;
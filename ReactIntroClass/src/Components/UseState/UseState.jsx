import React, { useState } from 'react';

const UseStateFucn = () => {

    const [count, setCount] = useState({a: 0, b: 0, c: 0});

    const increment = ()=>{
        setCount(
            (prevValue)=>{
                return {
                    a: prevValue.a + 1,
                    b: prevValue.b + 2,
                    c: prevValue.c + 5
            }
        })
    }

    const dicrement = ()=>{
        if(count.a > 0){
            setCount(
                (prevValue)=>{
                    return {
                        a: prevValue.a - 1
                }
            })
        }
    }

  return (
    <div>
        <p>Counst is: {count.a}</p>
        <button onClick={increment}>increment</button>
        <button onClick={dicrement}>dicrement</button>
    </div>
  )
}

export default UseStateFucn;
// Catch multiple input in one objetc:

import React from 'react'
import { useState } from 'react';

const MultipleInput = () => {

    const [details, setDetails] = useState({
        name: "",
        gmail: "",
        password: "",
        address: ""
    })

    const handleChanges = (e)=>{
        const {name, value} = e.target;

        setDetails((prev)=>{
            return { ...prev, [name]: value} //Need more knowledge about this.
        });
    }

    const keys = [];
    const values = [];
    for(let key in details){
    keys.push(key);
    values.push(details[key]);
    }
    
    
    const handleformSubmit = (e)=>{
        e.preventDefault();
    }


    
  return (
    <div>
        <form onSubmit={handleformSubmit}>
            <label>Name: </label><input name="name" onChange={handleChanges}  type="text" /><br />
            <label>Gmail: </label><input name="gmail" onChange={handleChanges} type="email" /><br />
            <label>password: </label><input name="password" onChange={handleChanges} type="password" /><br />
            <label>Address: </label><input name="address" onChange={handleChanges} type="text" /><br />
            
            <button>Submit</button>
        </form>

    </div>
  )
}

export default MultipleInput;
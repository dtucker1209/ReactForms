import React from 'react'
import { useState } from 'react'



export default function SignUpForm({setToken}) {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);


async function handleSubmit(event) {
    event.preventDefault();
    
    // console.log("Hello 👋"); 
    try {
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
            {
                method: "POST",
                body:JSON.stringify({
                    username,
                    password,
                }),
            }
        );
        const result = await response.json();
        console.log(result);
        setToken(result.token);
    } catch (error) {
    setError(error.message);    
    }
}

  return (
    <>
     <h2 className='text'> Sign Up!</h2>
     {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}>
        <label className='text2'>
            Username: <input 
            value ={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder='Enter Username'
            pattern=".{3,}"
            title='must be at least 5 characters long'/>
        </label>
    
        <label className='text2'>
            Password: <input 
            type ="password" 
            value ={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password' 
            pattern=".{5,}"
            title='must be at least 5 characters long'
            />
            </label>
            <button className='button'> Submit</button>
    </form>
    </>
  );
}

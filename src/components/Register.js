import React, { useState } from "react"

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(`username: ${username}\npw: ${password}`);
        const response = await fetch('https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt/users/register', {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: password
            },
        })
    })
    console.log('Response Ok? '+response.ok)
    if (response.ok) {
        const data = await response.json()
        const token = data.data.token
        localStorage.setItem('token', token)
        setUsername('')
        setPassword('')
        alert(`New User Created!\nUsername: ${username}`)
      }
    else {
        setUsername('')
        setPassword('')
        alert('There was an error registering user:'+username+'\nPlease ensure the username is unique')
    }
      
} 
return (
    <div id="register">
        Create New Account
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit">Sign Up!</button>
        </form>
    </div>
)}
export default Register
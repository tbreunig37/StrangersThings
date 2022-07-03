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
    <div id="registerCenterAll">
        <div className="container">
            <h2>Create New Account</h2>
            <form id="registerForm" onSubmit={handleSubmit}>
                <div className="form-control">
                    <input
                    id="inputField"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="form-control">
                    <input
                    id="inputField"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div id="registerBtnParent">
                    <button id="registerBtn" type="submit">Sign Up!</button>
                </div>
            </form>
        </div>
    </div>
)}
export default Register
import React, { useState } from 'react';


const Login = () => { 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
      e.preventDefault()
    

    const response = await fetch('https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-PT/users/login', {
    method: "POST",
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        user: {
            username: username,
            password: password,
        },
    }),
}) 
const data = await response.json()
debugger
if (response.ok) {
  const token = data.data.token
  localStorage.setItem('token', token)
//update that token state
  setUsername('')
  setPassword('')
}

setUsername('')
setPassword('')
}


return(
    <div id='loginCenterAll'>
      <div className='container'>
        <h2>Login</h2>
        <form id='loginForm' onSubmit={handleSubmit}>
          <div className='form-control'>
            <input
            id='inputField' 
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          </div>
        
          <div className='form-control'>
            <input
            id='inputField' 
            type="password" 
            placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div id='loginBtnParent'>
            <button id='loginBtn' type='submit'>Log In!</button>
          </div>
        </form> 
      </div>
    </div>
)}

export default Login
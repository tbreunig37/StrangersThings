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
  <div className='container'>
  
    <form onSubmit={handleSubmit}>
      <div className='form-control'>
        Login
        <input 
          type="text"
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
        
      <div>
        <input 
        type="password" 
        placeholder='Password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      <input
      type="submit"
      value="Log In!"
      />

      <p className='loginText'>Don't have an account? <a id='registerBtn' href='#'>Register</a> </p>
    </form> 
  </div>
)}

export default Login
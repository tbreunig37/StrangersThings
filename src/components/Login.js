import { useState } from "react"

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
if (response.ok) {
  const data = await response.json()
  const token = data.data.token
  localStorage.setItem('token', token)
  setUsername('')
  setPassword('')
}

setUsername('')
setPassword('')
}


return(
  <form onSubmit={handleSubmit}>
  <label>
    Username:
    <input 
    type="text" 
    name="username" 
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    />
    Password:
    <input 
    type="password" 
    name="password" 
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
  </label>
  <input type="submit" value="Log In!" />
</form> 
)}

export default Login
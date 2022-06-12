import { useState } from "react"

const Register = () => { 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    fetch('https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt/users/register', {
    method: "POST",
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        user: {
            username: username,
            password: password
        }
    })
}) .then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(console.error);

return(
  <form>
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
  <input type="submit" value="Sign Up!" />
</form> 
)}

export default Register 
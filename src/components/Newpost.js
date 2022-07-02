import React, { useState } from "react";

const Newpost = () => {
    const [description, setDescription ] = useState()
    const [price, setPrice ] = useState()
    const [location, setLocation ] = useState()
    const [title, setTitle ] = useState()
    const [deliver, setDeliver ] = useState(false)
    const [posts, setPosts] = useState()


  const handleSubmit = async (e) => {
      e.preventDefault()
      const token = localStorage.getItem("token")
      console.log(`decription: ${description} \n  price: ${price} \n location: ${location} \n title: ${title}  \n willDeliver: ${deliver} \n token: ${token}`)
      const response = await fetch('https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt/posts', {
      method: "POST",
      headers: {
          'Content-Type' : 'application/json',
          'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
          post: {
            description: description, 
            price: price, 
            location: location, 
            title: title,  
            willDeliver: deliver,
          },
      })
  })
  if (response.ok) {
    console.log(data)
    posts.push(data.post)
      const data = await response.json()
      const token = data.data.token
      localStorage.setItem('token', token)
      setTitle('')
      setDescription('')
      setLocation('')
      setPrice('')
      setDeliver('')
      alert(`New Post Created!\nTitle: ${title}`)
    }
  else {
        setTitle('')
        setDescription('')
        setLocation('')
        setPrice('')
        setDeliver('')
        alert('There was an error creating post')
  }
    
}

return (
  <div id="newPost">
      <h1 id="createNewPost">Create New Post</h1>
      <form id="createNewPostForm" onSubmit={handleSubmit}>

          <input 
          id="title"
          type="text" 
          placeholder="What are you trying to sell?" 
          onChange={(e) => setTitle(e.target.value)}
          ></input>

          <textarea
          id="description"
          rows="2"
          cols="20" 
          type="text" 
          placeholder="Item Description" 
          onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <input 
          id="price"
          type="number" 
          placeholder="Item Price" 
          onChange={(e) => setPrice(e.target.value)}
          ></input>

          <input 
          id="location"
          type="text" 
          placeholder="Item Location" 
          onChange={(e) => setLocation(e.target.value)}
          ></input>
        </form>

    <div id="deliver">
          <input 
          id="deliver-check" 
          type="checkbox"
          onChange={(e) =>setDeliver(e.target.checked)}
          ></input>

          <label id="deliverText" htmlFor="deliver-check">Are you willing to deliver?</label>
  </div>
          <button id="postBtn" type="submit">Post</button>
    </div>
)}
export default Newpost  
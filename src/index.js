import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts';
import { API, fetchPosts } from './api/api';
import Register from './components/Register';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Newpost from './components/Newpost';
import Profile from './components/Profile';

const App = () =>
{
    //token state--> deafult is what is in local storage
    const [token, setToken] = useState('');
    const [posts,setPosts]=useState([]);
    useEffect(()=>
    {
        Promise.all([fetchPosts()])
        .then(([postsData])=>
        {
            setPosts(postsData);
        });
    },[])
    return (
    <div>
        <h1 id='mainTitle'>Stranger's Things</h1>
        <Navbar/>
       <Switch>
            <Route exact path = "/Posts">
                <Posts posts={posts} setPosts={setPosts}/>
            </Route>
            <Route exact path = "/Register">
                <Register />
            </Route>
            <Route exact path = "/Login">
                <Login />
            </Route>
            <Route exact path = "/Newpost">
                <Newpost />
                <Route exact path = "/Profile">
                <Profile />
            </Route>
            </Route>
       </Switch> 
    </div>
)}

ReactDOM.render(
    <BrowserRouter>
      <App />  
    </BrowserRouter>,
   document.getElementById('app'),
   );
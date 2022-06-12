import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts';
import { fetchPosts } from './api/api';
import Register from './components/Register';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'

const App = () =>
{
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
       </Switch> 
    </div>
)}

ReactDOM.render(
    <BrowserRouter>
      <App />,  
    </BrowserRouter>,
   document.getElementById('app'),
   );
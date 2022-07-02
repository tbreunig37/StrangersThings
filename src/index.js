import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts';
import { API_URL, fetchPosts } from './api/api';
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
    const [userData, setUserData] = useState({});
    const [posts,setPosts]=useState([]);

    const fetchUserData = async (token) => {
        const { data } = await API_URL({
            url: 'users/me',
            token,
        });
        setUserData(data);
        console.log(userData);
        return data;
    };

    const fetchPosts = async () => {
        const { data: { posts },
    } = await API_URL({
        url: '/posts',
    });
    return posts;
    };

    useEffect( () => {
        if (!token) {
            setToken(localStorage.getItem("token"));
            return;
        }
        const data = fetchUserData(token);
        if (data && data.username) {
            setUserData(data);
        }
    }, [token]);

    useEffect( () => {
        const posts = fetchPosts();
        setPosts(posts);
    }, []);

    return (
    <div>
        <Navbar/>
       <Switch> 
            <Route exact path = "/Posts">
                <Posts posts={posts} setPosts={setPosts}/>
            </Route>
            <Route exact path = "/Profile">
                <Profile />
            </Route>
            <Route exact path = "/Register">
                <Register />
            </Route>
            <Route exact path = "/Login">
                <Login />
            </Route>
            <Route exact path = "/Newpost">
                <Newpost />
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
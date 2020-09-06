import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { Grid } from '@material-ui/core';
import { Container } from 'react-bootstrap';


const Home = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h2>{posts.length}</h2>
            <Container>
               
               {
                 posts.map(post => <Post post={post} ></Post>)
                }
                
            </Container>
      
        </div>
    );
};

export default Home;
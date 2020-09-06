import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './component/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Headar/Header';
import Home from './component/Home/Home';
import Nomatch from './component/Nomatch/Nomatch';
import PostDetails from './component/PostDetails/PostDetails';




function App() {
 

  return (
    <div>
      <Header></Header>
    <Router>
      <Switch>
        <Route path="/home">
         <Home></Home>
        </Route>
           <Route exact path="/">
         <Home></Home>
        </Route>
        <Route path="/post/:postId">
          <PostDetails></PostDetails>
        </Route>
        <Route path="*">
          <Nomatch></Nomatch>
        </Route>
      </Switch>
    </Router>


    </div>
  );
}

export default App;

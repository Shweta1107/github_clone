import './App.css';
import React from 'react';
import UserPage from './container/UserPage';
import {BrowserRouter as Switch, Route, Redirect, BrowserRouter} from "react-router-dom";


function App() {
  const username = prompt("Enter a Github Username");
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/:userName" component={UserPage}/>
      <Redirect to={`/${username}`} />
    </Switch>
    </BrowserRouter>  
  );
}

export default App;

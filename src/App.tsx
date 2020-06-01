import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import User from './views/user/User';
import Post from './views/post/Post';
import Home from './views/home/Home';

//yarn add @types/react-router-dom  @types/react-router


const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route path="/movie" component={User}/>
            <Route path="/post" component={Post}/>
            <Route path="/posts/:id" component={Home}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

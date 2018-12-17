import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Post from './components/post';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Post /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

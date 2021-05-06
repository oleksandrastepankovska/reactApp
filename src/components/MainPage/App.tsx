import React from 'react';
import Header from '../Header';
import Profile from '../Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { Content } from './styles';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Content>
          <Profile />
        </Content>
        <Switch>
          <Route path="/workspaces">
            WORKSPACE
          </Route>
          <Route path="/publications">
            YOUR PUBLICATIONS
          </Route>
          <Route path="/network">
            YOUR NETWORK
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

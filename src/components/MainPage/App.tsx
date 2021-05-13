import Header from '../Header';
import Profile from '../Profile';
import Publications from '../Publications';
import Workspaces from '../Workspaces';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// styles
import { Content, ContentRight } from './styles';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Content>
          <Profile />
          <ContentRight>
            <Publications />
            <Workspaces />
          </ContentRight>
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

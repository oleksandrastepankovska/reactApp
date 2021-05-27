import Header from '../Header';
import Profile from '../Profile';
import Publications from '../Publications';
import Workspaces from '../Workspaces';
import Comments from '../Comments/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// styles
import * as S from './styles';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <S.Content>
          <Profile />
          <S.ContentRight>
            <Publications />
            <Workspaces />
            <Comments/>
          </S.ContentRight>
        </S.Content>                      
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

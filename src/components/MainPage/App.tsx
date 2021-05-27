import Header from '../Header';
import Profile from '../Profile';
import HomePage from '../HomePage'
import Entities from '../Entities'
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
          <Switch>
          <Route path="/entities">
            <Entities/>
          </Route>
          <Route path="/people">
            PEOPLE
          </Route>
          <Route path="/administration">
            ADMINISTRATION
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
          </S.ContentRight>
        </S.Content>                      
      </div>
    </Router>
  );
}

export default App;

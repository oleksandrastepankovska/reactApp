import React, {FC, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { Header } from '../Header/index';
import Profile from '../LeftProfile';
import HomePage from '../HomePage'
import Entities from '../Pages/EntitiesPage'
import {ClientContract} from '../Pages/WorkspacesPages/ClientContract';
import {Corporate} from '../Pages/WorkspacesPages/Corporate';
import {GroupNorms} from '../Pages/WorkspacesPages/GroupNorms';
import {RealEstateContracts} from '../Pages/WorkspacesPages/RealEstrateContracts';
import {SupplierContract} from '../Pages/WorkspacesPages/SupplierContract';
import {ProfilePage} from '../Pages/Profile'

// styles
import * as S from './styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import {getUsers} from '../../actions/usersActions';
import {getPhotos} from '../../actions/photoActions';
import {getPosts} from '../../actions/postsActions';
import {getComments} from '../../actions/commentsActions';
import {useSelector} from 'react-redux';
import {IState} from '../../reducers';
import {IUsersReducer} from '../../reducers/UsersReducers';
import {IPhotoReducer} from '../../reducers/PhotoReducers';
import {ISingleUser} from '../../entities/Users';
import Icons from '../../assets';

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>;
type GetPosts = ReturnType<typeof getPosts>;
type GetComments = ReturnType<typeof getComments>;




function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetPhotos>(getPhotos());
    dispatch<GetPosts>(getPosts());
    dispatch<GetComments>(getComments());
  }, []);
  const{ usersList } = useSelector<IState, IUsersReducer>(globalState => ({
    ...globalState.users
 }));
 const{ photoList } = useSelector<IState, IPhotoReducer>(globalState => ({
    ...globalState.photos
 }));

 const UsersList = usersList[Math.floor(Math.random() * 9)]
 
 function userPhoto(user : ISingleUser)  {
  for (let i = 0; i < photoList.length; i++) {
    const j = photoList[i];
    if(j.id===user.id){
       return j.url
    }
  }
  return "";
 }
 const User = {
   id: UsersList? UsersList.id: 0,
   name: UsersList? UsersList.name : "NoName",
   jobTitle:UsersList? UsersList.company.catchPhrase : 'NoJobTitle',
   companyName: UsersList? UsersList.company.name : 'NoJobCompany',
   imgUrl:UsersList? userPhoto(UsersList) : `${Icons.userIcon}`,
   email: UsersList? UsersList.email : "",
   phone: UsersList? UsersList.phone : "",
   city: UsersList? UsersList.address.city : "",
 }
  return (
    <Router>
      <div className="App">
        <Header user = {User}/>
        <S.Content>
          <Profile user = {User}/>
          <S.ContentRight>
          <Switch>
          <Route path="/entities">
            <Entities/>
          </Route>
          <Route path="/people">
            PEOPLE
          </Route>
          <Route path="/network">
            NETWORK
          </Route>
          <Route path="/administration">
            ADMINISTRATION
          </Route>
          <Route path="/publications">
            PUBLICATIONS
          </Route>
          <Route path="/ClientContract">
            <ClientContract user = {User}/>
          </Route>
          <Route path="/Corporate">
            <Corporate user = {User}/>
          </Route>
          <Route path="/GroupNorms">
            <GroupNorms user = {User}/>
          </Route>
          <Route path="/RealEstateContracts">
            <RealEstateContracts user = {User}/>
          </Route>
          <Route path="/SupplierContract">
            <SupplierContract user = {User}/>
          </Route>
          <Route path="/Profile">
            <ProfilePage user = {User}/>
          </Route>
          <Route path="/">
            <HomePage user = {User}/>
          </Route>
        </Switch>
          </S.ContentRight>
        </S.Content>                      
      </div>
    </Router>
  );
}

export default App;

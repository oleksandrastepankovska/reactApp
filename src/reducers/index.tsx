import users, { IUsersReducer } from './UsersReducers';
import photos, { IPhotoReducer } from './PhotoReducers';
import posts, {IPostsReducer} from './PostsReducers'
import comments, {ICommentsReducer} from './CommentsReducers'
import { combineReducers } from 'redux';


export default combineReducers({
    users,
    photos,
    posts,
    comments
})

export interface IState{
    users: IUsersReducer;
    photos: IPhotoReducer;
    posts: IPostsReducer;
    comments: ICommentsReducer;
}
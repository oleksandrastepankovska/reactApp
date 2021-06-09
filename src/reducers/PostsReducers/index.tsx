import { ISinglePost } from '../../entities/Posts';
import * as actionTypes from '../../actions/actionTypes/postsType';

export interface IPostsReducer{
    postList: ISinglePost[];
}

const defaultState = (): IPostsReducer => ({
    postList: []
});

export default (state = defaultState(), action: any) =>{
    switch (action.type) {
        case actionTypes.GET_POST: {
             const data: actionTypes.IPostTypes['GET_POST']= action;
             return{
                 ...state,
                 postList: data.postList
             }
        }

        default:{
            return state
        }
            
    }
}
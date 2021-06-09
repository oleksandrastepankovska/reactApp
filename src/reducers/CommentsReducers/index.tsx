import {ISingleComment} from '../../entities/Comments';
import * as actionTypes from '../../actions/actionTypes/commentsType'

export interface ICommentsReducer{
    commentsList: ISingleComment[];
}

const defaultState = (): ICommentsReducer => ({
    commentsList: []
});

export default (state = defaultState(), action: any) =>{
    switch (action.type) {
        case actionTypes.GET_COMMENTS: {
             const data: actionTypes.ICommentsTypes['GET_COMMENTS']= action;
             return{
                 ...state,
                commentsList: data.commentsList
             }
        }

        default:{
            return state
        }
            
    }
}
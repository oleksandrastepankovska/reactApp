import { ISingleComment } from '../../entities/Comments'

export const GET_COMMENTS = 'GET_COMMENTS';

export interface ICommentsTypes{
    GET_COMMENTS:{
        commentsList:ISingleComment[];
    }
}
import { ISinglePost } from '../../entities/Posts';

export const GET_POST='GET_POST';

export interface IPostTypes{
    GET_POST:{
        postList: ISinglePost[];
    }
}
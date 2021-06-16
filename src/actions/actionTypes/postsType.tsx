import { ISinglePost } from '../../entities/Posts';

export const GET_POST='GET_POST';

export interface IPhotoTypes{
    GET_POST:{
        postsList: ISinglePost[];
    }
}
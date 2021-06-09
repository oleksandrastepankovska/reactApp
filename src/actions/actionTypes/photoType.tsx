import { ISinglePhoto } from '../../entities/Photos'

export const GET_PHOTO = 'GET_PHOTO';

export interface IPhotoTypes{
    GET_PHOTO:{
        photoList:ISinglePhoto[];
    }
}
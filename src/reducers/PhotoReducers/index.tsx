import {ISinglePhoto} from '../../entities/Photos';
import * as actionTypes from '../../actions/actionTypes/photoType';

export interface IPhotoReducer{
    photoList: ISinglePhoto[];
}

const defaultState = (): IPhotoReducer => ({
    photoList: []
});

export default (state = defaultState(), action: any) =>{
    switch (action.type) {
        case actionTypes.GET_PHOTO: {
             const data: actionTypes.IPhotoTypes['GET_PHOTO']= action;
             return{
                 ...state,
                 photoList: data.photoList
             }
        }

        default:{
            return state
        }
            
    }
}
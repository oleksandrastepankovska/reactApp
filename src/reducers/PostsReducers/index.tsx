
import { ISinglePost } from "../../entities/Posts";
import * as actionTypes from "../../actions/actionTypes/postsType";

export interface IPostsReducer {
  postsList: ISinglePost[];
}

const defaultState = (): IPostsReducer => ({
  postsList: [],
});

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_POST: {
      const payload: actionTypes.IPhotoTypes["GET_POST"] = action;
      return {
        ...state,
        postsList: payload.postsList,
      };
    }

    default: {
        return state;
    }
  }
};
import { Dispatch } from "redux";
import * as actionTypes from "./actionTypes/postsType";
import { ISinglePost } from "../entities/Posts";

export const getPosts = (): Promise<ISinglePost[]> => (async (dispatch: Dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsList = await response.json();
    dispatch({
      type: actionTypes.GET_POST,
      postsList,
    });
}) as any;
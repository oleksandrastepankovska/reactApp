import { Dispatch } from "redux";
import * as actionTypes from "./actionTypes/usersType";
import { ISingleUser } from "../entities/Users";

export const getUsers = (): Promise<ISingleUser[]> => (async (dispatch: Dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersList = await response.json();
    dispatch({
      type: actionTypes.GET_USERS,
      usersList,
    });
}) as any;
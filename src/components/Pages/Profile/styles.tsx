import styled from 'styled-components';
import { Field, Form } from "formik";
import Icons from '../../../assets';

export const ProfileWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 0px 15px;
  margin: 0 auto;
  background-color: white;
  margin-bottom:20px;
`;
export const ProfileHeader = styled.div`
  display:flex;
  justify-content: flex-end;
  margin: 10px 5px;
  margin-bottom:0;
`;
export const HeaderItem = styled('div') <{beforeImg: string}>`
  width: 200px;
  height: 40px;
  position:relative;
  padding: 8px;
  padding-left: 40px;
  cursor: pointer;
  &::before{
    content: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.beforeImg}')`};
    position: absolute;
    left: 10px;
  }
`;
export const Close = styled.button`
  display: block;
  width: 33px;
  height: 33px;
  margin: 5px 0;
  background-image: url(${Icons.closeIcon});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
`;
export const UserWrapper = styled.div`
  display:flex;
  padding:1 0px 5px;
`;
export const User = styled.div`
  width:200px;
  margin: 20px 35px;
`;

export const UserImg =styled('a')<{imgUrl?:string}>`
 width: 70px;
 height: 70px;
 margin-right: 15px;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 background-image:${(props) =>
    `url('${process.env.PUBLIC_URL}${props.imgUrl}')`};
 border-radius: 50%;
`;

export const SeeProfile = styled.div`
  color:  blue;
  font-size: 15px;
  font-weight: 400;
  margin:5px 0;
`;
export const UserInfoWrapper = styled.div`
  display:flex;
  justify-content: space-between;
`;
export const ProfileForm = styled(Form)`
  display:flex;
  max-width: 1000px;
  width:100%;
`;
export const UserInfo = styled.div`
  margin-top: 30px;
  display:flex;
  width:150%;
`;

export const Avatar = styled.img `
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin: 10px;
`;

export const LeftSide = styled.div`
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;
export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-end;
`;
export const TextField = styled(Field)<{bold?:boolean}>`
  height: fit-content;
  width:fit-content;
  color: black;
  border-radius: 0.5rem;
  border: none;
  padding: 5px 0;
  background-color:transparent;
  display: block;
  font-weight:${({ bold }) =>
    bold ? '700' : '400'};
  font-size: 15px;
`;
export const Edit = styled.button`
  width: 33px;
  height: 33px;
  margin-bottom:30px;
  background-image: url(${Icons.editIcon});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
`;
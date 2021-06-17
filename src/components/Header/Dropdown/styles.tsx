import styled from 'styled-components';
import { Input } from '../styles';
import Icons from '../../../assets'; 
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    width: 260px;
    position: absolute;
    top: auto;
    left: 0px;
    overflow: hidden;
    border-top:none;
    transition: all 0.7s;
    z-index: 1;
    background-color: white;
    align-items: center;
    box-shadow: 0 8px 6px -6px 	grey;
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

export const ScrollWrapper = styled.div`
   overflow-y: scroll;
   max-height: 400px;
`;

export const Li = styled('li')<{beforeImgUrl?:string, afterImgUrl?:string, padding?:string , border?:boolean}>`
        padding-top: ${(props) => `${props.padding}`};
        display: flex;
        justify-content: space-between;
        position: relative;
        padding-left: 30px;
        height: 40px;
        margin-top: 5px;
        &::before {
            content: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.beforeImgUrl}')`};
            position: absolute;
            left: -15px;
            width: 20px;
            height: 20px;
            margin: 0px 5px;
            cursor:pointer;
        }
        &::after{
            content: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.afterImgUrl}')`};
            position: absolute;
            right: -12px;
            top:5px;
            width: 35px;
            height:28px;
            margin: 0px 5px;
            border: ${(props) =>
            props.border ? "0.5px solid #000" : "none"};
            padding:5px;
            border-radius: 7px;
            text-align: center;
            cursor:pointer;
        }
        
        a{
            color: black;
            font-size: 18px;
            outline: none;
        }
        
`;


export const CircleItem = styled.div`
  background-color: white;
  transition: all 0.3s;
  border: 0px solid #e0e0e0;
  border-left-width: 1px;
  border-right-width: 1px;
  padding: 0px 23px;
  display: flex;
  align-items: center;
`;

export const UserBookmarks = styled.ul`
   border-top: grey 1px solid;
`;

export const CircleUl = styled(UserBookmarks)`
  padding: 5px 20px;
  overflow: hidden;
`;

export const Filter = styled(Input)`
    height: 25px;
    width: 240px;
    margin: 10px auto;
    font-size: 14px;
`;

export const Title = styled.p`
    display: block;
    padding: 10px 10px 0px 10px;
    margin: 0px;
    font-size: 14px;
    color: #878b91;
`;

export const UserInfo = styled.div`
 margin-left: 40px;
 
`;

export const UserName = styled.div`
    padding:2px;
`;
export const SeeProfile = styled(Link)`
    color:blue;
    padding:2px;
`;
export const LogOut = styled.div`
    height: 45px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid grey;
    border-top: 1px solid grey;
    text-align: center;
    justify-content: center;
    color: #878b91;
    font-size: 16px;
    position:relative;
    &::before{
      content: url('${Icons.logoutIcon}');
      position: absolute;
      left: 70px;
    }
`;

export const CircleLi = styled(Li)`
   height: 25px;
   padding-left: 40px;
   a{
        font-size: 16px;
        color:#232c47;
    }
`;
export const UserBox = styled.div`
    display: flex;
`;
export const UserImage = styled(UserImg)`
  width: 40px;
  height: 40px;
  margin: 2px;
  position: absolute;
  left: 0px
`;
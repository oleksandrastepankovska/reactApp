import styled from 'styled-components';
import { Field, Form } from "formik";
import Icons from '../../../../assets'
import DatePicker from "react-datepicker";

export const BigWrapper = styled.div`
  max-width: 930px;
  width: 100%;
  margin-bottom:45px;
  border-top: 1px solid  grey;
 
`;
export const SmallWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 
`;
export const SmallWrapperForFields = styled(SmallWrapper)`
    max-width: 550px;
 
`;
export const Title = styled.div`
 color:  lightgray;
 font-size:10px;
 margin:10px;
`;
export const Title2 = styled(Title)`
  color: darkgray;
  font-size:12px;
  font-weight: 500;
  padding:10px 0;
`;
export const ProfileForm2 = styled(Form)`
    padding: 10px 0;
    padding-bottom:20px;
`;
export const Edit2 = styled.button`
  width: 33px;
  height: 33px;
  margin-bottom:30px;
  background-image: url(${Icons.editIcon});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  margin-bottom: 0;
`;
export const SelectField = styled(Field)`
  display:block;
  height: fit-content;
  width:fit-content;
  color: #6EAABA;
  border-radius: 0.5rem;
  border: none;
  padding: 10px;
  background-color:  lightblue;
  font-size: 15px;
`;
export const SelectField2 = styled(Field)`
  display:block;
  height: fit-content;
  width:fit-content;
  border-radius: 0.5rem;
  border: none;
  padding-left: 50px;
  padding: 10px;
  font-size: 15px;
  margin:0;
  color: darkgrey;
`;
export const InputField = styled(Field)`
  display:block;
  height: fit-content;
  width:fit-content;
  width:100%;
  color: darkgrey;
  border-radius: 0.5rem;
  border: none;
  padding: 10px;
  background-color: transparent;
  display: block;
  font-size: 15px;
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

export const Row = styled.tr`
    width:100%;
    justify-content: space-between;
    display: flex;
`;
export const TableTitle = styled.th`
    padding-top:20px;
    color:darkgrey;
    font-size:10px;
    font-weight: 500;
`;

export const TableContent = styled.td`
    font-size: 15px;
    font-weight: 500;
    color:darkgrey;
    width:200px;
`;
export const StyledDate = styled(DatePicker)`
  background:transparent;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 500;
  color:darkgrey;
  text-align: start;
  padding: 10px 0;
  max-width:200px;
`;
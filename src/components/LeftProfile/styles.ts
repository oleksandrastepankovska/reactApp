import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`

export const Wrapper = styled.div `
    display: inline-block;
    margin-right: 40px;
`;

export const ProfileInfo = styled.div `
    text-align: center;
    width: 230px;
    height: 300px;
    padding: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border-radius: 4.5px;
`;
export const Avatar = styled.img `
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin: 10px;
`;

export const Name = styled.div `
    padding: 2px;
    margin: 5px;
    text-align: center;
    color:#2a3f9d;
    font-size: 20px;
    font-weight: 500;
`;
export const JobInfo = styled.div `
    padding: 2px;
    margin: 5px;
    text-align: center; 
    color: #b4b7ba;
`;
export const NetworkInfo = styled.div `
    display:flex;
    width: 180px;
    justify-content: space-between;
    margin: 10px;
`;
export const PublicationsInfo = styled.div `
    display:flex;
    width: 180px;
    justify-content: space-between;
    margin: 10px;
`;
export const OtherOptions = styled.div ``;
export const Ecosystem = styled.div ``;
export const Entities = styled.div ``;

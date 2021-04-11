import styled from 'styled-components';
import searchLogo from '../../assets/search.svg';

export const Wrapper = styled.div`
  display: flex;
  height: 40px;
  margin-bottom: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  padding: 10px;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  padding: 0 10px;
`;


export const Home = styled.div`
  display: flex;
  padding: 0 10px;
  width: 250px;
  justify-content: space-between;
  margin-right: 80px;
`;

export const HomeRight = styled.div`
  display: flex;
`;

export const Input = styled.input`
  background: url(${searchLogo}) no-repeat scroll 7px 7px;
  border-radius: 5px;
  width: 480px;
`;

export const RightIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 125px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.img`
  width: 25px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-wrap: no-wrap;
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

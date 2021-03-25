import styled from 'styled-components';
import searchLogo from '../../assets/search.svg';
import logo from '../../assets/logo.png';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
`;

export const Logo = styled.div`
  background: url(${logo});
  width: 40px;
  height: 40px;
`;


export const Home = styled.div``;

export const Input = styled.input`
  background: url(${searchLogo}) no-repeat scroll 7px 7px;
  padding-left:30px;
`;

export const RightIcons = styled.div`
  display:flex;
  justify-content: space-between;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Home = styled.div`
  display: flex;
  padding: 0 10px;
  width: 250px;
  justify-content: space-between;
  margin-right: 80px;
  cursor: pointer;
`;

export const HomeRight = styled.div`
  display: flex;
`;

export const Icon = styled.img`
  width: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

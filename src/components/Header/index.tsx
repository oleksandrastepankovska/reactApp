import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Home = styled.div``;

const Input = styled.input``;

const RightIcons = styled.div``;

const Header: React.FC = () => {
  return (
    <Wrapper>
        <img></img>
        <Home>
            <a href=""><img src="" alt=""/></a>
            <p>Home</p>
        </Home>
        <Input></Input>
        <RightIcons>
            <a href=""><img src="" alt=""/></a>
            <a href=""><img src="" alt=""/></a>
            <a href=""><img src="" alt=""/></a>
            <a href=""><img src="" alt=""/></a>
        </RightIcons>
    </Wrapper>
  );
};

export default Header;

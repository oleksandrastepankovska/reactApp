import React from 'react';
import Dropdown from './Dropdown';
import Icons from '../../assets/index';
import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Wrapper >
      <S.HeaderLeft>      
        <S.Logo src={Icons.homeIcon} />
        <Dropdown />
      </S.HeaderLeft>
      <S.HeaderRight>
        <S.Input />
        <S.RightIcons>
          <S.Icon src={Icons.homeIcon} />
          <S.Icon src={Icons.commentsIcon} />
          <S.Icon src={Icons.bellIcon} />
        </S.RightIcons>
      </S.HeaderRight>
      
    </S.Wrapper>
  );
};

export default Header;

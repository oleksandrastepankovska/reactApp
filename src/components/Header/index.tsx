import React from 'react';
import Dropdown from './Dropdown';
import Icons from '../../assets/index';

// styles
import { Wrapper, Input, RightIcons, Logo, Icon, HeaderLeft, HeaderRight} from './styles';

const Header: React.FC = () => {
  return (
    <Wrapper >
      <HeaderLeft>      
        <Logo src={Icons.homeIcon} />
        <Dropdown />
      </HeaderLeft>
      <HeaderRight>
        <Input />
        <RightIcons>
          <Icon src={Icons.homeIcon} />
          <Icon src={Icons.commentsIcon} />
          <Icon src={Icons.bellIcon} />
        </RightIcons>
      </HeaderRight>
      
    </Wrapper>
  );
};

export default Header;

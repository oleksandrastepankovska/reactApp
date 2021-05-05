import React from 'react';
import houseLogo from '../../assets/house.svg';
import commentsLogo from '../../assets/comments.svg';
import bellLogo from '../../assets/bell.svg';
import mainLogo from '../../assets/logo.png';
import Publications from '../common/Publications'
import Dropdown from './Dropdown';


// styles
import { Wrapper, Input, RightIcons, Logo, Icon, HeaderLeft, HeaderRight} from './styles';

const Header: React.FC = () => {
  return (
    <Wrapper >
      <HeaderLeft>      
        <Logo src={mainLogo} />
        <Dropdown />
      </HeaderLeft>
      <HeaderRight>
        <Input />
        <RightIcons>
          <Icon src={houseLogo} />
          <Icon src={commentsLogo} />
          <Icon src={bellLogo} />
        </RightIcons>
      </HeaderRight>
      
    </Wrapper>
  );
};

export default Header;

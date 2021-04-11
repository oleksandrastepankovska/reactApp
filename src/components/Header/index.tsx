import React from 'react';
import useDropdown from 'react-dropdown-hook';
import houseLogo from '../../assets/house.svg';
import commentsLogo from '../../assets/comments.svg';
import bellLogo from '../../assets/bell.svg';
import blackHouse from '../../assets/house2.svg';
import arrowDown from '../../assets/arrow-down.svg';
import mainLogo from '../../assets/logo.png';
import Publications from '../common/Publications'


// styles
import { Wrapper, Home, HomeRight, Input, RightIcons, Logo, Menu, Icon, HeaderLeft, HeaderRight } from './styles';

const Header: React.FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
  
  return (
    <Wrapper >
      <HeaderLeft>      
        <Logo src={mainLogo} />
        <Home onClick={toggleDropdown} ref={wrapperRef}>
          <HomeRight>
          <Icon src={blackHouse} />
          <p>Home</p>
          </HomeRight>
          <Icon src={arrowDown} />
        </Home>
        {dropdownOpen && (
          <Menu>
            Home
            <Publications />
            People
          </Menu>
        )}
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

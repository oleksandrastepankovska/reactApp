import React from 'react';
import houseLogo from '../../assets/house.svg';
import commentsLogo from '../../assets/comments.svg';
import bellLogo from '../../assets/bell.svg';
import blackHouse from '../../assets/house2.svg';
import useDropdown from 'react-dropdown-hook';

// styles
import { Wrapper, Home, Input, RightIcons, Logo, Menu } from './styles';

const Header: React.FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
  
  return (
    <Wrapper >
      <Logo></Logo>
      <Home ref={wrapperRef}>
        <img onClick={toggleDropdown} src={blackHouse} />
        {dropdownOpen && (
          <Menu>
            Home
            Publications 
            People
          </Menu>
        )}
  
      </Home>
      <Input></Input>
      <RightIcons>
        <img src={houseLogo} />
        <img src={commentsLogo} />
        <img src={bellLogo} />
      </RightIcons>
    </Wrapper>
  );
};

export default Header;

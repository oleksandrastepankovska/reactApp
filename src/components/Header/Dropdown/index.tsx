import { Menu, Dropdown } from 'antd';
import 'antd/dist/antd.css';
import blackHouse from '../../../assets/house2.svg';
import arrowDown from '../../../assets/arrow-down.svg';
import Icons from '../../../assets/index'

import { Home, HomeRight, Icon } from './styles';

const MenuView = () => (
    <Menu>
      <Menu.Item key="0">
        <a href="">Home</a>
      </Menu.Item>
      <Menu.Item key="1"><Icon src={Icons.yourPublicationsIcon} />Publications</Menu.Item>
      <Menu.Item key="3"><Icon src={Icons.peopleIcon} />People</Menu.Item>
      <Menu.Item key="4"><Icon src={Icons.entitiesIcon} />Entities</Menu.Item>
      <Menu.Item key="5"><Icon src={Icons.adminIcon} />Administration</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="6"><Icon src={Icons.contractIcon} />Client Contract</Menu.Item>
      <Menu.Item key="7"><Icon src={Icons.contractIcon} />Supplier Contract</Menu.Item>
      <Menu.Item key="8"><Icon src={Icons.entities2Icon} />Corporate</Menu.Item>
      <Menu.Item key="9"><Icon src={Icons.bookIcon} />Group Norms</Menu.Item>
      <Menu.Item key="10"><Icon src={Icons.contractIcon} />Real estate contacts</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="11"><Icon src={Icons.privacyIcon} />Privacy</Menu.Item>
      <Menu.Item key="12"><Icon src={Icons.settingsIcon} />Settings</Menu.Item>
    </Menu>
  );

const DropdownComponent = () => (
  <Dropdown overlay={MenuView} trigger={['click']}>
    <Home onClick={e => e.preventDefault()}>
    <HomeRight>
    <Icon src={blackHouse} />
    <p>Home</p>
    </HomeRight>
    <Icon src={arrowDown} />
    </Home>
</Dropdown>
)

export default DropdownComponent;
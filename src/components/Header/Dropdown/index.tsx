import { Menu, Dropdown } from 'antd';
import 'antd/dist/antd.css';
import Icons from '../../../assets/index'
import MENU_ITEMS from '../../common/MenuItems/index'
import * as S from './styles';



const MenuView = () => (
    <Menu>
      {MENU_ITEMS.map(({ title, iconSrc }) => <Menu.Item key={title}><S.Icon src={iconSrc} />{title}</Menu.Item>)}
    </Menu>
  );

const DropdownComponent = () => (
  <Dropdown overlay={MenuView} trigger={['click']}>
    <S.Home onClick={e => e.preventDefault()}>
    <S.HomeRight>
    <S.Icon src={Icons.blackHouseIcon} />
    <p>Home</p>
    </S.HomeRight>
    <S.Icon src={Icons.arrowDownIcon} />
    </S.Home>
</Dropdown>
)

export default DropdownComponent;

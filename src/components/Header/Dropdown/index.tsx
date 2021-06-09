import { FC, useState, useEffect, useCallback } from 'react';
import { Menu, Dropdown } from 'antd';
import 'antd/dist/antd.css';
import Icons from '../../../assets/index'
import MENU_ITEMS from '../../common/MenuItems/index'
import * as S from './styles';

const MenuView = () => {
    const [items, setItems] = useState(MENU_ITEMS);

    const onInputChange = useCallback((e: any) => {
      const inputValue = e.target.value.toLowerCase();
      const newItems = MENU_ITEMS.filter(
        item =>
          item.title.toLowerCase().includes(inputValue)
        );
      setItems(newItems);
    }, [setItems]);

    return (
      <Menu>
        <input onChange={onInputChange} placeholder="Filter" />
        {items.map(({ title, iconSrc }) =><Menu.Item key={title}><S.Icon alt="" src={iconSrc} />{title}</Menu.Item>)}
      </Menu>
    );
};

const DropdownComponent = () => (
  <Dropdown overlay={<MenuView />} trigger={['click']}>
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

import { FC, useState, useEffect, useCallback } from 'react';
import { Menu, Dropdown } from 'antd';
import 'antd/dist/antd.css';
import Icons from '../../../assets/index'
import { MENU_ITEMS, MENU_ITEMS_TYPES, MENU_ITEMS_TYPES_LIST } from '../../common/MenuItems/index'
import * as S from './styles';

interface IMenuView {
  setActiveItem: any;
}

const getItemsListByType = (type: string): any => MENU_ITEMS.filter(item => item.type === type);

const getLists = () => MENU_ITEMS_TYPES_LIST.reduce((accumulator, currentValue) => {
  const list = getItemsListByType(currentValue);
  return accumulator = {
    ...accumulator,
    [currentValue]: list,
  };
}, {});

const MenuView: React.FC<IMenuView> = ({ setActiveItem }) => {
    const [items, setItems] = useState(MENU_ITEMS);

    const onInputChange = useCallback((e: any) => {
      const inputValue = e.target.value.toLowerCase();
      const newItems = MENU_ITEMS.filter(
        item =>
          item.title.toLowerCase().includes(inputValue)
        );
      setItems(newItems);
    }, [setItems]);

    const lists: any = getLists();

    console.log(lists);

    return (
      <Menu>
        <input onChange={onInputChange} placeholder="Filter" />
        {lists.platform.map((item:any) =>
          <Menu.Item onClick={() => setActiveItem(item)} key={item.title}>
            <S.StyledLink to={`/${item.title}`}>
              <S.Icon alt="" src={item.iconSrc} />{item.title}
            </S.StyledLink>
          </Menu.Item>
        )}
        {lists.workspaces.map((item:any) =>
          <Menu.Item onClick={() => setActiveItem(item)} key={item.title}>
            <S.StyledLink to={`/${item.title}`}>
              <S.Icon alt="" src={item.iconSrc} />{item.title}
            </S.StyledLink>
          </Menu.Item>
        )}
        user
        {lists.user.map((item:any) =>
          <Menu.Item onClick={() => setActiveItem(item)} key={item.title}>
            <S.StyledLink to={`/${item.title}`}>
              <S.Icon alt="" src={item.iconSrc} />{item.title}
            </S.StyledLink>
          </Menu.Item>
        )}
      </Menu>
    );
};

const DropdownComponent = () => {
  const defaultActiveItem = MENU_ITEMS[0];

  const [activeItem, setActiveItem] = useState(defaultActiveItem);

  return (
    <Dropdown overlay={<MenuView setActiveItem={setActiveItem} />} trigger={['click']}>
      <S.Home onClick={e => e.preventDefault()}>
      <S.HomeRight>
      <S.Icon src={activeItem.iconSrc} />
      <p>{activeItem.title}</p>
      </S.HomeRight>
      <S.Icon src={Icons.arrowDownIcon} />
      </S.Home>
    </Dropdown>
  )
}

export default DropdownComponent;

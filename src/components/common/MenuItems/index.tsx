import Icons from '../../../assets/index';

export const MENU_ITEMS_TYPES = {
  PLATFORM: 'platform',
  WORKSPACES: 'workspaces',
  USER: 'user',
};

export const MENU_ITEMS_TYPES_LIST = Object.values(MENU_ITEMS_TYPES);

export const MENU_ITEMS = [
    {
      title: 'Home',
      path: '/home',
      iconSrc: Icons.homeIcon,
      type: MENU_ITEMS_TYPES.PLATFORM,
    },
    {
      title: 'Publications',
      iconSrc: Icons.yourPublicationsIcon,
      type: MENU_ITEMS_TYPES.PLATFORM,
    },
    {
      title: 'People',
      iconSrc: Icons.peopleIcon,
      type: MENU_ITEMS_TYPES.PLATFORM,
    },
    {
      title: 'Entities',
      iconSrc: Icons.entitiesIcon,
      type: MENU_ITEMS_TYPES.PLATFORM,
    },
    {
      title: 'Administration',
      iconSrc: Icons.adminIcon,
      type: MENU_ITEMS_TYPES.PLATFORM,
    },
    {
      title: 'Client Contract',
      iconSrc: Icons.contractIcon,
      type: MENU_ITEMS_TYPES.WORKSPACES,
    },
    {
      title: 'Supplier Contract',
      iconSrc: Icons.contractIcon,
      type: MENU_ITEMS_TYPES.WORKSPACES,
    },
    {
      title: 'Corporate',
      iconSrc: Icons.entities2Icon,
      type: MENU_ITEMS_TYPES.WORKSPACES,
    },
    {
      title: 'Group Norms',
      iconSrc: Icons.bookIcon,
      type: MENU_ITEMS_TYPES.WORKSPACES,
    },
    {
      title: 'Real estate contacts',
      iconSrc: Icons.contractIcon,
      type: MENU_ITEMS_TYPES.WORKSPACES,
    },
    {
      title: 'Privacy',
      iconSrc: Icons.privacyIcon,
      type: MENU_ITEMS_TYPES.USER,
    },
    {
      title: 'Settings',
      iconSrc: Icons.settingsIcon,
      type: MENU_ITEMS_TYPES.USER,
    },
  ];

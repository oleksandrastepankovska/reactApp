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
      path: '/publications',
      iconSrc: Icons.yourPublicationsIcon,
      type: MENU_ITEMS_TYPES.PLATFORM,
    },
    {
      title: 'People',
      path: '/people',
      iconSrc: Icons.peopleIcon,
      type: MENU_ITEMS_TYPES.PLATFORM,
    },
    {
      title: 'Entities',
      path: '/entities',
      iconSrc: Icons.entitiesIcon,
      type: MENU_ITEMS_TYPES.PLATFORM,
    },
    {
      title: 'Administration',
      path: '/administration',
      iconSrc: Icons.adminIcon,
      type: MENU_ITEMS_TYPES.PLATFORM,
    },
    {
      title: 'Client Contract',
      path: '/ClientContract',
      iconSrc: Icons.contractIcon,
      type: MENU_ITEMS_TYPES.WORKSPACES,
    },
    {
      title: 'Supplier Contract',
      path: '/SupplierContract',
      iconSrc: Icons.contractIcon,
      type: MENU_ITEMS_TYPES.WORKSPACES,
    },
    {
      title: 'Corporate',
      path: '/Corporate',
      iconSrc: Icons.entities2Icon,
      type: MENU_ITEMS_TYPES.WORKSPACES,
    },
    {
      title: 'Group Norms',
      path: '/GroupNorms',
      iconSrc: Icons.bookIcon,
      type: MENU_ITEMS_TYPES.WORKSPACES,
    },
    {
      title: 'Real estate contracts',
      path: '/RealEstateContracts',
      iconSrc: Icons.contractIcon,
      type: MENU_ITEMS_TYPES.WORKSPACES,
    },
    {
      title: 'Privacy',
      path: '/privacy',
      iconSrc: Icons.privacyIcon,
      type: MENU_ITEMS_TYPES.USER,
    },
    {
      title: 'Settings',
      path: '/Profile',
      iconSrc: Icons.settingsIcon,
      type: MENU_ITEMS_TYPES.USER,
    },
  ];

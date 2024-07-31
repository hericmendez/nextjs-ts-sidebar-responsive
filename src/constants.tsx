import { Icon } from '@iconify/react';
import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon='lucide:home' width='24' height='24' />,
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <Icon icon='lucide:folder' width='24' height='24' />,
    submenu: true,
    subMenuItems: [
      {
        title: 'All',
        path: '/projects',
      },
      {
        title: 'Front-end',
        path: '/projects/front-end',
      },
      {
        title: 'Fullstack',
        path: '/projects/fullstack',
      },
    ],
  },
  {
    title: 'Resources',
    path: '/resources',
    icon: <Icon icon='lucide:bookmark' width='24' height='24' />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon='lucide:settings' width='24' height='24' />,
  },
];

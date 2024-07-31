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
    icon: <Icon icon='lucide:layout-list' width='24' height='24' />,
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
    title: 'To do',
    path: '/to-do',
    icon: <Icon icon='lucide:list-todo' width='24' height='24' />,
    submenu: true,
    subMenuItems: [
      {
        title: 'All',
        path: '/to-do',
      },
      {
        title: 'Tutorials',
        path: '/to-do/tutorials',
      },
      {
        title: 'Ideas',
        path: '/to-do/ideas',
      },
    ],
  },
  {
    title: 'Resources',
    path: '/resources',
    icon: <Icon icon='lucide:bookmark' width='24' height='24' />,
  },
  {
    title: 'Work in progress',
    path: '/work-in-progress',
    icon: <Icon icon='lucide:construction' width='24' height='24' />,
  },
];

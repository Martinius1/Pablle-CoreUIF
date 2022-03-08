import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Pablle'
  },
  {
    name: 'Configurations',
    url: '/dashboard',
    iconComponent: { name: 'cil-List' },
  },
  {
    name: 'Computers',
    iconComponent: { name: 'cil-Cursor' },
    url: '/computers'
  },
  {
    name: 'Requests',
    iconComponent: { name: 'cil-Chart' },
    url: '/requests'
  },
  {
    name: 'Logs',
    iconComponent: { name: 'cil-Notes' },
    url: '/logs'
  }
];

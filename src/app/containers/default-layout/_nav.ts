import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Pablle'
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Computers',
    iconComponent: { name: 'cil-speedometer' },
    url: '/computers'
  },
  {
    name: 'Monitor',
    iconComponent: { name: 'cil-speedometer' },
    url: '/requests'
  },
  {
    name: 'Logs',
    iconComponent: { name: 'cil-speedometer' },
    url: '/logs'
  }
];

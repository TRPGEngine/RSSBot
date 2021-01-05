import { helloAction } from './controller/user';

export const routes = [
  {
    path: '/hello',
    method: 'get',
    action: helloAction,
  },
];

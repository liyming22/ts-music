import React from 'react';
import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';

import Home from '../application/Home';
import Rank from '../application/Rank';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        // eslint-disable-next-line react/display-name
        render: () => <Redirect to="/recommend" />,
      },
      {
        path: '/recommend',
        component: Recommend,
      },
      {
        path: '/singers',
        component: Singers,
      },
      {
        path: '/rank',
        component: Rank,
      },
    ],
  },
];

export default routes;

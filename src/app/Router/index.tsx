import { RouteObject } from 'react-router-dom';

import { HomePage } from 'app/pages/Home/Loadable';
import { UseReduxPage } from 'app/pages/UseRedux/Loadable';
import { CssDemoPage } from 'app/pages/CssDemo/Loadable';

interface RouterType extends RouteObject {
  name: string;
}

const Routers: Array<RouterType> = [
  {
    path: '/',
    element: <HomePage />,
    name: '首页',
  },
  {
    path: '/useredux',
    element: <UseReduxPage />,
    name: 'redux使用',
  },
  {
    path: '/css',
    element: <CssDemoPage />,
    name: 'css案例',
  },
];

const RouterConfig: RouteObject[] = Routers.map(v => ({
  ...v,
  name: undefined,
}));

export default RouterConfig;
export { Routers };

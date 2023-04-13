import { HomePage } from 'app/pages/Home/Loadable';
import { UseReduxPage } from 'app/pages/UseRedux/Loadable';
import { CssDemoPage } from 'app/pages/CssDemo/Loadable';

const Routers = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/useredux',
    element: <UseReduxPage />,
  },
  {
    path: '/css',
    element: <CssDemoPage />,
  },
];

export default Routers;

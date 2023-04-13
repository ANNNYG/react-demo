import { lazyLoad } from 'utils/loadable';

export const UseReduxPage = lazyLoad(() => import('./index'));

import { lazyLoad } from 'utils/loadable';

export const CssDemoPage = lazyLoad(() => import('./index'));

/**
 *
 * Asynchronously loads the component for NewSlice
 *
 */

import { lazyLoad } from 'utils/loadable';

export const NewSlice = lazyLoad(
  () => import('./index'),
  module => module.NewSlice,
);

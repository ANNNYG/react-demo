/* 
  因为redux-injectors会在你的代码中某个地方异步注入你的reducers
  你必须在这里手动声明它们
  属性是可选的，因为它们是在你的应用程序中的某个时候被注入组件的。
  所以，并不总是可用的
*/

import { UseReduxType } from 'app/pages/UseRedux/slice/type';
export interface RootState {
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
  useRedux?: UseReduxType;
}

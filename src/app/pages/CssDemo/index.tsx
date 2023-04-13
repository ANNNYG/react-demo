import React from 'react';

import { ItemWrap, ProgressBar } from './styled';

const Item = ({ children }) => {
  return <ItemWrap>{children}</ItemWrap>;
};

const CssDemo = () => {
  return (
    <>
      <Item>
        背景滚动
        <ProgressBar />
      </Item>
    </>
  );
};

export default CssDemo;

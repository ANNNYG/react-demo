import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createAction } from '@reduxjs/toolkit';
import { Button } from 'antd';

import { selectLogined, selectMessageCount } from '../App/slice/selectors';
import { CHANGE_COUNT } from '../App/slice/saga';

export function HomePage() {
  let history = useHistory();
  const dispatch = useDispatch();

  const userLogined = useSelector(selectLogined);
  const messageCount = useSelector(selectMessageCount);

  const handleJump = () => {
    history.push(userLogined ? 'user' : 'login');
  };

  const handleChangeCount = () => {
    const increment = createAction<number | undefined>(CHANGE_COUNT);
    dispatch(increment(messageCount + 1));
  };

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <p>
        <span>Wellcome</span>
      </p>
      <Button
        type="primary"
        size="large"
        style={{ width: '368px' }}
        onClick={handleJump}
      >
        {userLogined ? '用户页面' : '跳转登录页面'}
      </Button>
      <Button
        type="primary"
        size="large"
        style={{ width: '368px', marginTop: 10 }}
        onClick={handleChangeCount}
      >
        点击次数：{messageCount}
      </Button>
    </>
  );
}

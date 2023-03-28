/**
 *
 * NewSlice
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';

import { useSelector, useDispatch } from 'react-redux';
import { createAction } from '@reduxjs/toolkit';

import { useNewSliceSlice } from './slice';
import { selectNewSlice } from './slice/selectors';

import { Button } from 'antd';

import * as cons from './slice/constants';

interface Props {}

export const NewSlice = memo((props: Props) => {
  const { actions } = useNewSliceSlice();

  const newSlice = useSelector(selectNewSlice);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(actions.actionAdd());
  };
  const handleDel = () => {
    dispatch(actions.actionDel());
  };
  const handleReset = () => {
    const increment = createAction<number | undefined>(cons.SET_COUNT);
    dispatch(increment(0));
  };

  return (
    <>
      <Helmet>
        <title>DemoPage</title>
        <meta name="description" content="Description of DemoPage" />
      </Helmet>
      <Div>
        <p>{newSlice.count}</p>
        <Button
          type="primary"
          size="large"
          style={{ margin: '0 20px' }}
          onClick={handleAdd}
        >
          +
        </Button>
        <Button
          type="primary"
          size="large"
          style={{ margin: '0 20px' }}
          onClick={handleDel}
        >
          -
        </Button>
        <Button
          type="primary"
          size="large"
          style={{ margin: '0 20px' }}
          onClick={handleReset}
        >
          reset
        </Button>
      </Div>
    </>
  );
});

const Div = styled.div``;

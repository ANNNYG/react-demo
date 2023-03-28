/**
 *
 * UserPage
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';

import { selectUserInfo } from '../App/slice/selectors';

interface Props {}

export const UserPage = memo((props: Props) => {
  const { name } = useSelector(selectUserInfo);

  return (
    <>
      <Helmet>
        <title>用户信息</title>
      </Helmet>
      <p>
        <span>Wellcome {name}</span>
      </p>
    </>
  );
});

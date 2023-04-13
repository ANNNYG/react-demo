import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';

import { useSlice } from './slice/reducer';
import { selectUser, selectCustomer } from './slice/selector';

const mapStateToProps = createStructuredSelector({
  user: selectUser(),
  customer: selectCustomer(),
});

const UseRedux = () => {
  const { actions } = useSlice();
  const dispatch = useDispatch();

  const { user, customer } = useSelector(mapStateToProps);

  const handleClick = () => {
    dispatch(actions.actionUser({ name: new Date().toString() }));
  };

  useEffect(() => {
    console.log('customer');
  }, [customer]);

  const renderUser = () => {
    return (
      <div onClick={handleClick}>
        <h3>user的数据</h3>
        <div>name {user.name}</div>
      </div>
    );
  };

  const renderCustomer = () => {
    return (
      <div>
        <h3>客户的数据</h3>
        <div>name {customer.name}</div>
      </div>
    );
  };

  return (
    <div>
      {renderUser()}
      {renderCustomer()}
    </div>
  );
};

export default UseRedux;

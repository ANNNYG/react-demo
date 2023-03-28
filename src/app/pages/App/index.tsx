/**
 *
 * App
 *
 */

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { LoginPage } from '../LoginPage/Loadable';
import { UserPage } from '../UserPage/Loadable';
import { UacSucPage } from '../UacSucPage/Loadable';
import { HomePage } from '../HomePage/Loadable';
import { NewSlice } from '../NewSlice/Loadable';
import { NotFoundPage } from '../NotFoundPage/Loadable';

import { useAppSlice } from './slice';

import {
  userIsNotAuthenticatedRedir,
  userIsAuthenticatedRedir,
} from '../../auth';

const Login = userIsNotAuthenticatedRedir(LoginPage);
const User = userIsAuthenticatedRedir(UserPage);

interface Props {}

export function AppPage(props: Props) {
  useAppSlice();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route path="/user" component={User} />
        <Route path="/login" component={Login} />
        <Route path="/uacsuc" component={UacSucPage} />
        <Route path="/slice" component={NewSlice} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

/**
 *
 * App
 *
 */

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

interface Props {}

export function AppPage(props: Props) {
  return (
    <BrowserRouter>
      <Switch></Switch>
    </BrowserRouter>
  );
}

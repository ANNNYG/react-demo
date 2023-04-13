import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import ROUTERS from 'app/Router';

interface Props {}

export function AppPage(props: Props) {
  const Router = () => {
    const element = useRoutes(ROUTERS);
    return element;
  };

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

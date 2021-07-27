import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListOrders from "./pages/ListOrders";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ListOrders} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
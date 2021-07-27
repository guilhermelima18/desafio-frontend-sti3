import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ChangeOrders from './pages/ChangeOrders';
import ListOrders from "./pages/ListOrders";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ListOrders} />
        <Route path="/top-products" component={ListOrders} />
        <Route path="/change-orders/:id" component={ChangeOrders} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
import React from 'react';
import { GlobalStorage } from "./contexts/GlobalContext";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ChangeOrders from './pages/ChangeOrders';
import ListOrders from "./pages/ListOrders";

import Header from "./components/Header";

import './styles/global.scss';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Header />
        <Switch>
          <Route path="/" exact component={ListOrders} />
          <Route path="/top-products" component={ListOrders} />
          <Route path="/change-orders/:id" component={ChangeOrders} />
        </Switch>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
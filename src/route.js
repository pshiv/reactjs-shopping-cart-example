import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/home/Home";
import ShoppingList from "./containers/shoppingList/ShoppingList";

const createRoutes = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/home">
            <Home />
        </Route>
        <Route exact path="/my-cart">
           <ShoppingList/>
        </Route>
    </Switch>
);

export default createRoutes;

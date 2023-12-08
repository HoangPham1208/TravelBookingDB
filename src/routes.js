import Home from "./Component/home";
import User from "./Component/user";
import Account from "./Component/account";
import Cart from "./Component/cart";
import ListPlane from "./Component/listPlane";
import InsertPassenger from "./Component/insertPassenger";
import TicketPlane from "./Component/ticketPlane";
import Details from "./Component/details";
import Provider from "./Component/provider";
import ManagerService from "./Component/managerService";

import {Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";

export default (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<Cart />} />
            <Route path ="/cart/details" element={<Details />} />
            <Route path="/user/listPlane" element={<ListPlane />} />
            <Route path="/user/listPlane/passenger" element={<InsertPassenger />} />
            <Route path="/user/ticketPlane" element={<TicketPlane />} />
            <Route path="/provider" element={<Provider />} />

            <Route path="/provider/managerService" element={<ManagerService />} />
        </Routes>
    </BrowserRouter>
);

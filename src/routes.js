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

import ProtectedRoute from "./Utils/protectedRoute";

export default (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/user" element={
                <ProtectedRoute>
                    <User />
                </ProtectedRoute>} />
            <Route path="/account" element={
                <ProtectedRoute>
                    <Account />
                </ProtectedRoute>} />
            <Route path="/cart" element={
                <ProtectedRoute>
                    <Cart />
                </ProtectedRoute>} />
            <Route path ="/cart/details" element={
                <ProtectedRoute>
                    <Details />
                </ProtectedRoute>} />
            <Route path="/user/listPlane" element={
                <ProtectedRoute>
                    <ListPlane />
                </ProtectedRoute>} />
            <Route path="/user/listPlane/passenger" element={
                <ProtectedRoute>
                    <InsertPassenger />
                </ProtectedRoute>} />
            <Route path="/user/ticketPlane" element=
                {<ProtectedRoute>
                    <TicketPlane />
                </ProtectedRoute>} />
            <Route path="/provider" element={
                <ProtectedRoute>
                    <Provider />
                </ProtectedRoute>} />
                
            <Route path="/provider/managerService" element={
                <ProtectedRoute>
                    <ManagerService />
                </ProtectedRoute>} />
        </Routes>
    </BrowserRouter>
);

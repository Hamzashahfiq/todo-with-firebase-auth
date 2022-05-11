import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AssignedToMe from '../pages/assignedToMe/AssignedToMe';
import Home from '../pages/home/Home';
import Important from '../pages/important/Important'
import Completed from '../pages/completed/Completed';
import Task from '../pages/task/Task';
import Login from '../pages/auth/login/Login'
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { useSelector } from 'react-redux';

export default function Routing() {
    const isLoginUser = useSelector((store) => store.AuthReducer.isLoginUser)
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute isLoginUser={isLoginUser} />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/important" element={<Important />} />
                    <Route path="/completed" element={<Completed />} />
                    <Route path="/assigned_to_me" element={<AssignedToMe />} />
                    <Route path="/task" element={<Task />} />
                </Route>


                <Route path="/login" element={<PublicRoute isLoginUser={isLoginUser}><Login /></PublicRoute>} />
            </Routes>
        </BrowserRouter>

    )
}

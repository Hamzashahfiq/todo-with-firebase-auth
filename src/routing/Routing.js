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

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoute isLoginUser={true}><Home /></PrivateRoute>} />
                <Route path="/important" element={<PrivateRoute isLoginUser={true}><Important /></PrivateRoute>} />
                <Route path="/completed" element={<PrivateRoute isLoginUser={true}><Completed /></PrivateRoute>} />
                <Route path="/assigned_to_me" element={<PrivateRoute isLoginUser={true}><AssignedToMe /></PrivateRoute>} />
                <Route path="/task" element={<PrivateRoute isLoginUser={true}><Task /></PrivateRoute>} />


                <Route path="/login" element={<PublicRoute isLoginUser={true}><Login /></PublicRoute>} />
            </Routes>
        </BrowserRouter>
        
    )
}

import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
export const ProtectedRoute = () => {
    const token = window.localStorage.getItem("token");
    return token? <Outlet/> : <Navigate to="/"/> 
}
import React from 'react'
import { Outlet, Navigate, Route } from 'react-router-dom';
import { useProfile } from '../context/profile.context';
 const PrivateRoute = function(){
    const profile = useProfile();
   return profile?<Outlet/>:<Navigate to = "/"/>

 }
 export default PrivateRoute;
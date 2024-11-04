


import PrivateRoute from "./Components/PrivateRoute";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import PublicRoute from "./Components/PublicRoute";
import { ProfileProvider } from "./context/profile.context";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";







function App() {
  return (
    <>
    <ProfileProvider>
      <Routes>
      <Route element = {<PublicRoute/>}>
      <Route path = "/signin" element={<SignIn/>}></Route>

      </Route>
      
      

    
      <Route element = {<PrivateRoute/>}>
      <Route path = "/" element={<Home/>}></Route>

      </Route>
      
        
      </Routes>
    
   
    </ProfileProvider>
    
      
    </>
  );
}

export default App;

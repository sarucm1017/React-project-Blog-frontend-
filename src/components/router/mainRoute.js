import React from "react";
import MainLayout from "../layouts/mainLayout/mainLayout";
import { Route, Routes } from 'react-router-dom';
import AdminPannel from "../adminPannel/adminPannel";

const MainRoute = () => {
    return(
        <>
         <Routes>
            <Route path="/" element={<MainLayout/>} />
            <Route path = "adminPannel" element ={<AdminPannel/>}/>
         </Routes>
        </>
    )
}

export default MainRoute;
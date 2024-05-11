import React from "react";
import MainLayout from "../layouts/mainLayout/mainLayout";
import { Route, Routes } from 'react-router-dom'

const MainRoute = () => {
    return(
        <>
         <Routes>
            <Route path="/" element={<MainLayout/>} />
         </Routes>
        </>
    )
}

export default MainRoute;
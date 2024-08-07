import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Dashboard from '../component/Dashboard';
import Layout from '../layout/Layout';
import Home from '../component/Home';
import About from '../component/About';


const HeaderRoutes = () => {
    return ( 
        <>
        <Routes>
        <Route path=""  element={<> <Layout/> <Dashboard/> </>}/>
        <Route path="/dashboard" element={<> <Layout/> <Dashboard/> </>}> </Route>
        <Route path="/home" element={<> <Layout/> <Home/> </>}> </Route>
        <Route path="/about" element={<> <Layout/> <About/> </>}> </Route>
        </Routes>
        </>
     );
}
 
export default HeaderRoutes;
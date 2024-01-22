import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

export default () => {
    return (
        <>
            <Header/>
            <main className='container main'>
                <SideBar/>
                <Outlet/>
                <div className='rightpanel'>

                </div>
            </main>
            <Footer/>
        </>
    )
};
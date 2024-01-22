import {useRoutes} from "react-router-dom";
import {AUTH, AUTH_LOGIN, AUTH_REGISTER} from "./routeNames";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import BasicLayout from "../Layouts/BasicLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import React from "react";
import Message from "../pages/Message";

export default function RoutePages () {
    return useRoutes([
        {
            path: AUTH,
            element: <AuthLayout/>,
            children: [
                {
                    path: AUTH_LOGIN,
                    element: <Login/>
                },
                {
                    path: AUTH_REGISTER,
                    element: <Register/>
                },
            ]
        },
        {
            path: '/',
            element: <BasicLayout/>,
            children: [
                {path: '', element: <Home/>},
                {
                    path: 'myProfile/', element: <MyProfile/>,
                    children: [
                        {path: '', element: ''},
                        {path: 'bookmarks', element: ''},
                        {path: 'friends', element: ''},
                        {path: 'subscriptions', element: ''},
                        {path: 'subscribers', element: ''},
                    ]},
                {path: 'explore', element: (
                        <>
                            {/*<h4 style={{color: 'white'}}>explore</h4>*/}
                            <div className='header__search-result-loading' style={{margin: '0 auto'}}></div>

                        </>

                    )},
                {path: 'notifications', element: (
                        // <h4 style={{color: 'white'}}>notifications</h4>
                        <div className='header__search-result-loading' style={{margin: '0 auto'}}></div>
                    )},
                {path: 'message/', element: <Message />, children: [{path: ':id'}]},
                {path: 'friends', element: (
                        // <h4 style={{color: 'white'}}>friends</h4>
                        <div className='header__search-result-loading' style={{margin: '0 auto'}}></div>
                    )},
                {path: 'myProfile/bookmarks', element: (
                        // <h4 style={{color: 'white'}}>myProfile/bookmarks</h4>
                        <div className='header__search-result-loading' style={{margin: '0 auto'}}></div>
                    )},
                {path: 'settings', element: (
                        // <h4 style={{color: 'white'}}>settings</h4>
                        <div className='header__search-result-loading' style={{margin: '0 auto'}}></div>
                    )},
            ]
        }
    ])
}
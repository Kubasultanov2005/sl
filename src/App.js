import {useRoutes} from "react-router-dom";
import {AUTH, AUTH_LOGIN, AUTH_REGISTER} from "./utils/routeNames";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import BasicLayout from "./Layouts/BasicLayout";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import MyProfile from "./pages/MyProfile";
import Home from "./pages/Home";
import RoutePages from "./utils/RoutePages";
import Create from "./components/Create";

function App () {

  const dispatch = useDispatch();
  const {mode} = useSelector((state) => state.theme);
  const {create} = useSelector((state) => state.modals);

  console.log(mode)

  useEffect(() => {
    document.documentElement.style.setProperty('--bg-color', mode === 'night' ? '#151515' : '#f3f4f5');
    document.documentElement.style.setProperty('--bg-color-ex', mode === 'night' ? '#343435' : '#e5e6e8');
    document.documentElement.style.setProperty('--bg-color-ex1', mode === 'night' ? '#474748' : '#d2d3d5');
    document.documentElement.style.setProperty('--black-white', mode === 'night' ? '#FFFFFF' : '#000000');
    document.documentElement.style.setProperty('--white-black', mode === 'night' ? '#000000' : '#FFFFFF');
    document.documentElement.style.setProperty('--white-black-ex', mode === 'night' ? '#111111' : '#f1f1f1');
    document.documentElement.style.setProperty('--box-shadow-color', mode === 'night' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.2)');
    document.documentElement.style.setProperty('--box-shadow-color-ex', mode === 'night' ? 'rgba(0,0,0, 0.2)' : 'rgba(0,0,0,0.5)');

    const bodyElement = document.querySelector('body');

    if (bodyElement) {
      bodyElement.style.overflow = create ? 'hidden' : 'auto';
    }

    return () => {
      if (bodyElement) {
        bodyElement.style.overflow = 'auto';
      }
    };
  }, [mode , create]);

  return (
      <>

        <RoutePages/>
        <Create/>
      </>
  )
}

export default App;

import React from "react";
import {Outlet} from "react-router-dom";
import {MdOutlineDarkMode, MdOutlineLightMode} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {toggleMode} from "../../features/store";

export default () => {

    const dispatch = useDispatch();
    const {mode} = useSelector((state) => state.theme);

    return (
        <>
            <Outlet/>
            <button className='auth__mode' onClick={() => dispatch(toggleMode(mode === 'day' ? 'night' : 'day'))}>
                {
                    mode === 'day' ? (
                        <MdOutlineLightMode className='auth__mode-icon'/>

                    ) : (
                        <MdOutlineDarkMode className='auth__mode-icon'/>
                    )
                }
            </button>
        </>
    )
};
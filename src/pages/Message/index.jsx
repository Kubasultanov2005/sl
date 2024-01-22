import React from "react";
import MessageUsers from "./MessageUsers";
import MessageRight from "./MessageRight";
import {useLocation} from "react-router-dom";

export default () => {

    const {pathname} = useLocation()

    return (
        <>
            <div className='ms'>
                {
                    pathname === '/message' ? (
                        <MessageUsers/>
                    ) : (
                        <MessageRight/>
                    )
                }
            </div>
        </>
    )
};
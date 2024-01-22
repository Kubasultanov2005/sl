import React from "react";
import Avatar from "../Avatar";
import {LuPlusCircle} from "react-icons/lu";

export default () => {
    return (
        <div className='user'>
            <div className='user__left'>
                <Avatar src='' className='user__avatar'/>
                <div className='user__info'>
                    <h4 className='user__name'>
                        Веселый
                    </h4>
                    <p className='user__dop-info'>
                        10000 подписчиков
                    </p>
                </div>
            </div>
            <div className='user__right'>
                <button className='user__btn'>
                    <LuPlusCircle className='user__btn-icon' />
                </button>
            </div>
        </div>
    )
};
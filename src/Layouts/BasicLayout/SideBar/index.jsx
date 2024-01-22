import React from "react";
import {IoHomeOutline} from "react-icons/io5";
import {FiUser} from "react-icons/fi";
import {RiMessengerLine} from "react-icons/ri";
import {LiaUserFriendsSolid} from "react-icons/lia";
import {MdOutlineBookmarkBorder, MdOutlineExplore} from "react-icons/md";
import {IoMdNotificationsOutline} from "react-icons/io";
import {CiSettings, CiSquarePlus} from "react-icons/ci";
import {Link, NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toggleCreateModal} from "../../../features/store";

export default () => {

    const dispatch = useDispatch()

    return (
        <div className='nav'>
            <div className='nav__links'>
                <NavLink to='/myProfile' className='nav__link'>
                    <FiUser className='nav__link-icon'/>
                    Мой профиль
                </NavLink>
                <NavLink to='/'  className='nav__link'>
                    <IoHomeOutline className='nav__link-icon'/>
                    Главная
                </NavLink>
                <NavLink to='/explore' className='nav__link'>
                    <MdOutlineExplore className='nav__link-icon'/>
                    Интересное
                </NavLink>
                <NavLink to='/notifications' className='nav__link'>
                    <IoMdNotificationsOutline className='nav__link-icon'/>
                    Уведомления
                </NavLink>
                <div className='nav__link' onClick={() => dispatch(toggleCreateModal())}>
                    <CiSquarePlus className='nav__link-icon'/>
                    Создать пост
                </div>
                <NavLink to='message' className='nav__link'>
                    <RiMessengerLine className='nav__link-icon'/>
                    Сообщения
                </NavLink>
                <NavLink to='/friends' className='nav__link'>
                    <LiaUserFriendsSolid className='nav__link-icon'/>
                    Друзья
                </NavLink>
                <NavLink to='/myProfile/bookmarks' className='nav__link'>
                    <MdOutlineBookmarkBorder className='nav__link-icon'/>
                    Закладки
                </NavLink>
                <NavLink to='/settings' className='nav__link'>
                    <CiSettings className='nav__link-icon'/>
                    Настройки
                </NavLink>
            </div>

        </div>
    )
};
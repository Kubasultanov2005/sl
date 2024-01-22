import React, {useState} from "react";
import MyProfileInfo from "./MyProfileInfo";
import {IoTabletLandscapeOutline} from "react-icons/io5";
import {LiaUserFriendsSolid} from "react-icons/lia";
import {MdOutlineBookmarkBorder} from "react-icons/md";
import {Link, NavLink, useLocation} from "react-router-dom";
import {CiSquarePlus} from "react-icons/ci";
import Post from "../../components/Post";

export default () => {

    const {pathname} = useLocation()

    return (
        <div className='profile'>
            <MyProfileInfo/>
            <div className='blog top bottom'>
                <div className='profile__nav'>
                    <Link to='/myProfile' className={`profile__nav-btn ${pathname === '/myProfile' ? 'active' : ''}`}>
                        <IoTabletLandscapeOutline className='profile__nav-btn_icon'/>
                        Посты
                    </Link>
                    <NavLink to='/myProfile/bookmarks' className="profile__nav-btn">
                        <MdOutlineBookmarkBorder className='profile__nav-btn_icon'/>
                        Закладки
                    </NavLink>
                    |
                    <NavLink to='/myProfile/friends' className="profile__nav-btn">
                        Друзья
                    </NavLink>
                    <NavLink to='/myProfile/subscriptions' className="profile__nav-btn">
                        Подписки
                    </NavLink>
                    <NavLink to='/myProfile/subscribers' className="profile__nav-btn">
                        Подписчики
                    </NavLink>
                </div>
            </div>
            <div className='header__search-result-loading' style={{margin: '20px auto'}}></div>

            <div style={{height: '20px'}}></div>
            {/*<div className="blog top">*/}
            {/*    <div className="profile__no">*/}
            {/*        <div className="profile__no-row">*/}
            {/*            <p className="profile__no-title">*/}
            {/*                У вас пока нет созданных постов*/}
            {/*            </p>*/}
            {/*            <button className="profile__no-btn">*/}
            {/*                <CiSquarePlus className='profile__no-btn_icon'/>*/}
            {/*                Создать пост*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
};

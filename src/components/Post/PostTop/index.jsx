import React, {useState} from "react";
import Avatar from "../../Avatar";
import {IoIosMore, IoMdNotificationsOutline} from "react-icons/io";
import {FiBookmark, FiMinus} from "react-icons/fi";
import {IoWarningOutline} from "react-icons/io5";

export default () => {

    const [moreOpen, setMoreOpen] = useState(false)

    const toggleMoreOpen = () => setMoreOpen(!moreOpen)
    const closeMoreOpen = () => setMoreOpen(false)

    return (
        <>
            <div className="post__top">
                <div className="post__top-left">
                    <Avatar src='' className='post__avatar'/>
                    <div className='post__info'>
                        <h5 className="post__info-name">
                            Remanga | читать мангу на русском
                        </h5>
                        <p className="post__info-time">
                            27 минут назад
                        </p>
                    </div>
                </div>
                <div className="post__top-right">
                    <button className="post__more" onClick={toggleMoreOpen}>
                        <IoIosMore className='post__more-icon'/>
                        <div className={`post__more-menu ${moreOpen ? 'open' : ''}`}>
                            <button className='post__more-btn'>
                                Уведомлять о записях
                                <IoMdNotificationsOutline className='post__more-btn_icon'/>
                            </button>
                            <button className='post__more-btn'>
                                Сохранить в закладках
                                <FiBookmark className='post__more-btn_icon'/>
                            </button>
                            <button className='post__more-btn'>
                                Не интересно
                                <FiMinus className='post__more-btn_icon'/>
                            </button>
                            <button className='post__more-btn error'>
                                Пожаловаться
                                <IoWarningOutline className='post__more-btn_icon'/>
                            </button>

                        </div>
                    </button>
                </div>
            </div>
            <div className={`overlay ${moreOpen ? 'open' : ''}`} onClick={closeMoreOpen}></div>
        </>
    )
};
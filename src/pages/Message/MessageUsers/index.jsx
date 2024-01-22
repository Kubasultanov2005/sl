import React from "react";
import {IoCreateOutline, IoSearchOutline} from "react-icons/io5";
import {IoIosMore} from "react-icons/io";
import Avatar from "../../../components/Avatar";
import {Link} from "react-router-dom";

export default () => {
    return (
        <>
            <div className='ms__users'>
                <div className="ms__users-top">
                    <div className='ms__users-input'>
                        <IoSearchOutline className='ms__users-input_icon'/>
                        <input type="text" placeholder='Поиск чатов...'/>
                    </div>
                    <div className="ms__users-btns">
                        <button className="ms__users-btn">
                            <IoCreateOutline className='ms__users-btn_icon' />
                        </button>
                        <button className="ms__users-btn more">
                            <IoIosMore className='ms__users-btn_icon' />
                        </button>
                    </div>
                </div>
                <div className='ms__users-list'>
                    <Link to='/message/chat' className="ms__users-item">
                        <div className="ms__users-item_left">
                            <Avatar src='' className='ms__users-item_avatar'/>
                            <div className="ms__users-item_info">
                                <h5 className="ms__users-item_name">
                                    Александр
                                </h5>
                                <p className="ms__users-item_last">
                                    Lorem
                                </p>
                            </div>
                        </div>
                        <div className="ms__users-item_right">
                            <p className="ms__users-item_data">
                                17:55
                            </p>
                            <button className='ms__users-item_count'>
                                12
                            </button>
                        </div>
                    </Link>
                    <Link to='/message/chat' className="ms__users-item">
                        <div className="ms__users-item_left">
                            <Avatar src='' className='ms__users-item_avatar'/>
                            <div className="ms__users-item_info">
                                <h5 className="ms__users-item_name">
                                    Александр
                                </h5>
                                <p className="ms__users-item_last">
                                    Lorem
                                </p>
                            </div>
                        </div>
                        <div className="ms__users-item_right">
                            <p className="ms__users-item_data">
                                17:55
                            </p>
                            <button className='ms__users-item_count'>
                                12
                            </button>
                        </div>
                    </Link>
                    <Link to='/message/chat' className="ms__users-item">
                        <div className="ms__users-item_left">
                            <Avatar src='' className='ms__users-item_avatar'/>
                            <div className="ms__users-item_info">
                                <h5 className="ms__users-item_name">
                                    Александр
                                </h5>
                                <p className="ms__users-item_last">
                                    Lorem
                                </p>
                            </div>
                        </div>
                        <div className="ms__users-item_right">
                            <p className="ms__users-item_data">
                                17:55
                            </p>
                            <button className='ms__users-item_count'>
                                12
                            </button>
                        </div>
                    </Link>
                    <Link to='/message/chat' className="ms__users-item">
                    <div className="ms__users-item_left">
                        <Avatar src='' className='ms__users-item_avatar'/>
                        <div className="ms__users-item_info">
                            <h5 className="ms__users-item_name">
                                Александр
                            </h5>
                            <p className="ms__users-item_last">
                                Lorem
                            </p>
                        </div>
                    </div>
                    <div className="ms__users-item_right">
                        <p className="ms__users-item_data">
                            17:55
                        </p>
                        <button className='ms__users-item_count'>
                            12
                        </button>
                    </div>
                </Link>
                    <Link to='/message/chat' className="ms__users-item">
                        <div className="ms__users-item_left">
                            <Avatar src='' className='ms__users-item_avatar'/>
                            <div className="ms__users-item_info">
                                <h5 className="ms__users-item_name">
                                    Александр
                                </h5>
                                <p className="ms__users-item_last">
                                    Lorem
                                </p>
                            </div>
                        </div>
                        <div className="ms__users-item_right">
                            <p className="ms__users-item_data">
                                17:55
                            </p>
                            <button className='ms__users-item_count'>
                                12
                            </button>
                        </div>
                    </Link>
                    <Link to='/message/chat' className="ms__users-item">
                    <div className="ms__users-item_left">
                        <Avatar src='' className='ms__users-item_avatar'/>
                        <div className="ms__users-item_info">
                            <h5 className="ms__users-item_name">
                                Александр
                            </h5>
                            <p className="ms__users-item_last">
                                Lorem
                            </p>
                        </div>
                    </div>
                    <div className="ms__users-item_right">
                        <p className="ms__users-item_data">
                            17:55
                        </p>
                        <button className='ms__users-item_count'>
                            12
                        </button>
                    </div>
                </Link>
                    <Link to='/message/chat' className="ms__users-item">
                        <div className="ms__users-item_left">
                            <Avatar src='' className='ms__users-item_avatar'/>
                            <div className="ms__users-item_info">
                                <h5 className="ms__users-item_name">
                                    Александр
                                </h5>
                                <p className="ms__users-item_last">
                                    Lorem
                                </p>
                            </div>
                        </div>
                        <div className="ms__users-item_right">
                            <p className="ms__users-item_data">
                                17:55
                            </p>
                            <button className='ms__users-item_count'>
                                12
                            </button>
                        </div>
                    </Link>
                    <Link to='/message/chat' className="ms__users-item">
                        <div className="ms__users-item_left">
                            <Avatar src='' className='ms__users-item_avatar'/>
                            <div className="ms__users-item_info">
                                <h5 className="ms__users-item_name">
                                    Александр
                                </h5>
                                <p className="ms__users-item_last">
                                    Lorem
                                </p>
                            </div>
                        </div>
                        <div className="ms__users-item_right">
                            <p className="ms__users-item_data">
                                17:55
                            </p>
                            <button className='ms__users-item_count'>
                                12
                            </button>
                        </div>
                    </Link>
                    <Link to='/message/chat' className="ms__users-item">
                        <div className="ms__users-item_left">
                            <Avatar src='' className='ms__users-item_avatar'/>
                            <div className="ms__users-item_info">
                                <h5 className="ms__users-item_name">
                                    Александр
                                </h5>
                                <p className="ms__users-item_last">
                                    Lorem
                                </p>
                            </div>
                        </div>
                        <div className="ms__users-item_right">
                            <p className="ms__users-item_data">
                                17:55
                            </p>
                            <button className='ms__users-item_count'>
                                12
                            </button>
                        </div>
                    </Link>
                    <Link to='/message/chat' className="ms__users-item">
                        <div className="ms__users-item_left">
                            <Avatar src='' className='ms__users-item_avatar'/>
                            <div className="ms__users-item_info">
                                <h5 className="ms__users-item_name">
                                    Александр
                                </h5>
                                <p className="ms__users-item_last">
                                    Lorem
                                </p>
                            </div>
                        </div>
                        <div className="ms__users-item_right">
                            <p className="ms__users-item_data">
                                17:55
                            </p>
                            <button className='ms__users-item_count'>
                                12
                            </button>
                        </div>
                    </Link>
                    <Link to='/message/chat' className="ms__users-item">
                        <div className="ms__users-item_left">
                            <Avatar src='' className='ms__users-item_avatar'/>
                            <div className="ms__users-item_info">
                                <h5 className="ms__users-item_name">
                                    Александр
                                </h5>
                                <p className="ms__users-item_last">
                                    Lorem
                                </p>
                            </div>
                        </div>
                        <div className="ms__users-item_right">
                            <p className="ms__users-item_data">
                                17:55
                            </p>
                            <button className='ms__users-item_count'>
                                12
                            </button>
                        </div>
                    </Link>
                    <Link to='/message/chat' className="ms__users-item">
                        <div className="ms__users-item_left">
                            <Avatar src='' className='ms__users-item_avatar'/>
                            <div className="ms__users-item_info">
                                <h5 className="ms__users-item_name">
                                    Александр
                                </h5>
                                <p className="ms__users-item_last">
                                    Lorem
                                </p>
                            </div>
                        </div>
                        <div className="ms__users-item_right">
                            <p className="ms__users-item_data">
                                17:55
                            </p>
                            <button className='ms__users-item_count'>
                                12
                            </button>
                        </div>
                    </Link>
                    <Link to='/message/chat' className="ms__users-item">
                        <div className="ms__users-item_left">
                            <Avatar src='' className='ms__users-item_avatar'/>
                            <div className="ms__users-item_info">
                                <h5 className="ms__users-item_name">
                                    Александр
                                </h5>
                                <p className="ms__users-item_last">
                                    Lorem
                                </p>
                            </div>
                        </div>
                        <div className="ms__users-item_right">
                            <p className="ms__users-item_data">
                                17:55
                            </p>
                            <button className='ms__users-item_count'>
                                12
                            </button>
                        </div>
                    </Link>
                    <Link to='/message/chat' className="ms__users-item">
                        <div className="ms__users-item_left">
                            <Avatar src='' className='ms__users-item_avatar'/>
                            <div className="ms__users-item_info">
                                <h5 className="ms__users-item_name">
                                    Александр
                                </h5>
                                <p className="ms__users-item_last">
                                    Lorem
                                </p>
                            </div>
                        </div>
                        <div className="ms__users-item_right">
                            <p className="ms__users-item_data">
                                17:55
                            </p>
                            <button className='ms__users-item_count'>
                                12
                            </button>
                        </div>
                    </Link>
                    <Link to='/message/chat' className="ms__users-item">
                        <div className="ms__users-item_left">
                            <Avatar src='' className='ms__users-item_avatar'/>
                            <div className="ms__users-item_info">
                                <h5 className="ms__users-item_name">
                                    Александр
                                </h5>
                                <p className="ms__users-item_last">
                                    Lorem
                                </p>
                            </div>
                        </div>
                        <div className="ms__users-item_right">
                            <p className="ms__users-item_data">
                                17:55
                            </p>
                            <button className='ms__users-item_count'>
                                12
                            </button>
                        </div>
                    </Link>

                </div>
            </div>
        </>
    )
};
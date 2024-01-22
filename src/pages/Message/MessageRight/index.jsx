import React from "react";
import {IoSearchOutline} from "react-icons/io5";
import {IoIosMore, IoMdArrowBack} from "react-icons/io";
import Avatar from "../../../components/Avatar";
import {LuCheck} from "react-icons/lu";
import {MdOutlinePhotoCamera} from "react-icons/md";
import {AiOutlineSend} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

export default () => {

    const navigate = useNavigate()

    return (
        <>
            <div className='ms__right'>
                <div className="ms__right-top">
                    <div className='ms__right-top_left'>
                        <button className='ms__btn' onClick={() => navigate('/message')}>
                            <IoMdArrowBack className='ms__btn-icon'/>
                        </button>
                        <div className="ms__info">
                            <h5 className="ms__name">
                                Азамат
                            </h5>
                            <p className="ms__lasttime">
                                был(а) 5 минут назад
                            </p>
                        </div>
                    </div>
                    <div className="ms__btns">
                        <button className='ms__btn'>
                            <IoSearchOutline className='ms__btn-icon'/>
                        </button>
                        <button className='ms__btn more'>
                            <IoIosMore className='ms__btn-icon'/>
                        </button>
                    </div>
                </div>
                <div className='ms__list'>
                    <div className="ms__item data">
                        <p className="ms__item-message">
                            21 января
                        </p>
                    </div>
                    <div className="ms__item">
                        <Avatar src='' className='ms__item-avatar'/>
                        <p className='ms__item-message'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis corporis dicta dolor dolores doloribus dolorum eius eveniet facere ipsa, iure laudantium libero officiis quis reiciendis similique, sit soluta tempore ut voluptatum. Accusamus, commodi consequatur molestiae quas qui reiciendis suscipit veritatis! At harum ipsa iure nam recusandae saepe suscipit ut.
                            <div className='ms__item-message_info'>
                                18:12 <LuCheck className='ms__item-message_info-check'/>
                            </div>
                        </p>
                    </div>
                    <div className="ms__item usr">
                        <p className='ms__item-message'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis corporis dicta dolor dolores doloribus dolorum eius eveniet facere ipsa, iure laudantium libero officiis quis reiciendis similique, sit soluta tempore ut voluptatum. Accusamus, commodi consequatur molestiae quas qui reiciendis suscipit veritatis! At harum ipsa iure nam recusandae saepe suscipit ut.
                            <div className='ms__item-message_info'>
                                18:12 <LuCheck className='ms__item-message_info-check'/>
                            </div>
                        </p>
                        <Avatar src='' className='ms__item-avatar'/>
                    </div>
                    <div className="ms__item">
                        <Avatar src='' className='ms__item-avatar'/>
                        <p className='ms__item-message'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis corporis dicta dolor dolores doloribus dolorum eius eveniet facere ipsa, iure laudantium libero officiis quis reiciendis similique, sit soluta tempore ut voluptatum. Accusamus, commodi consequatur molestiae quas qui reiciendis suscipit veritatis! At harum ipsa iure nam recusandae saepe suscipit ut.
                            <div className='ms__item-message_info'>
                                18:12 <LuCheck className='ms__item-message_info-check'/>
                            </div>
                        </p>
                    </div>
                    <div className="ms__item">
                        <Avatar src='' className='ms__item-avatar'/>
                        <p className='ms__item-message'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis corporis dicta dolor dolores doloribus dolorum eius eveniet facere ipsa, iure laudantium libero officiis quis reiciendis similique, sit soluta tempore ut voluptatum. Accusamus, commodi consequatur molestiae quas qui reiciendis suscipit veritatis! At harum ipsa iure nam recusandae saepe suscipit ut.
                            <div className='ms__item-message_info'>
                                18:12 <LuCheck className='ms__item-message_info-check'/>
                            </div>
                        </p>
                    </div>
                    <div className="ms__item">
                        <Avatar src='' className='ms__item-avatar'/>
                        <p className='ms__item-message'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis corporis dicta dolor dolores doloribus dolorum eius eveniet facere ipsa, iure laudantium libero officiis quis reiciendis similique, sit soluta tempore ut voluptatum. Accusamus, commodi consequatur molestiae quas qui reiciendis suscipit veritatis! At harum ipsa iure nam recusandae saepe suscipit ut.
                            <div className='ms__item-message_info'>
                                18:12 <LuCheck className='ms__item-message_info-check'/>
                            </div>
                        </p>
                    </div>
                    <div className="ms__item usr">
                        <p className='ms__item-message'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis corporis dicta dolor dolores doloribus dolorum eius eveniet facere ipsa, iure laudantium libero officiis quis reiciendis similique, sit soluta tempore ut voluptatum. Accusamus, commodi consequatur molestiae quas qui reiciendis suscipit veritatis! At harum ipsa iure nam recusandae saepe suscipit ut.
                            <div className='ms__item-message_info'>
                                18:12 <LuCheck className='ms__item-message_info-check'/>
                            </div>
                        </p>
                        <Avatar src='' className='ms__item-avatar'/>
                    </div>
                    <div className="ms__item usr">
                        <p className='ms__item-message'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis corporis dicta dolor dolores doloribus dolorum eius eveniet facere ipsa, iure laudantium libero officiis quis reiciendis similique, sit soluta tempore ut voluptatum. Accusamus, commodi consequatur molestiae quas qui reiciendis suscipit veritatis! At harum ipsa iure nam recusandae saepe suscipit ut.
                            <div className='ms__item-message_info'>
                                18:12 <LuCheck className='ms__item-message_info-check'/>
                            </div>
                        </p>
                        <Avatar src='' className='ms__item-avatar'/>
                    </div>
                    <div className="ms__item usr">
                        <p className='ms__item-message'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis corporis dicta dolor dolores doloribus dolorum eius eveniet facere ipsa, iure laudantium libero officiis quis reiciendis similique, sit soluta tempore ut voluptatum. Accusamus, commodi consequatur molestiae quas qui reiciendis suscipit veritatis! At harum ipsa iure nam recusandae saepe suscipit ut.
                            <div className='ms__item-message_info'>
                                18:12 <LuCheck className='ms__item-message_info-check'/>
                            </div>
                        </p>
                        <Avatar src='' className='ms__item-avatar'/>
                    </div>
                    <div className="ms__item usr">
                        <p className='ms__item-message'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis corporis dicta dolor dolores doloribus dolorum eius eveniet facere ipsa, iure laudantium libero officiis quis reiciendis similique, sit soluta tempore ut voluptatum. Accusamus, commodi consequatur molestiae quas qui reiciendis suscipit veritatis! At harum ipsa iure nam recusandae saepe suscipit ut.
                            <div className='ms__item-message_info'>
                                18:12 <LuCheck className='ms__item-message_info-check'/>
                            </div>
                        </p>
                        <Avatar src='' className='ms__item-avatar'/>
                    </div>
                </div>
                <div className="ms__input">
                    <input type="text" placeholder='Написать сообщение...'/>
                    <div className='ms__input-btns'>
                        <button className='ms__input-btn'>
                            <MdOutlinePhotoCamera className='ms__input-btn-icon'/>
                        </button>
                        <button className='ms__input-btn'>
                            <AiOutlineSend className='ms__input-btn-icon'/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};
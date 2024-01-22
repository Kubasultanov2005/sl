import React, { useState } from "react";
import Avatar from "../../../components/Avatar";
import { LiaUserEditSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import { MdExpandMore } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";
import MoreMenuBtn from "./MoreMenuBtn";
import MyProfileAvatar from "./MyProfileAvatar";

export default () => {
    const [descLimit, setDescLimit] = useState(true);

    const longDescription =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid blanditiis distinctio dolorem ea earum eligendi exercitationem fugit magnam maxime non obcaecati, optio, porro quae quas quos tenetur voluptates? Aliquid libero molestiae odio reiciendis unde voluptatibus! Consequatur quia tempora unde.";

    const truncatedDescription = descLimit
        ? longDescription.slice(0, 34) + "..."
        : longDescription;

    const toggleDescLimit = () => {
        setDescLimit(!descLimit);
    };

    return (
        <>
            <div className="blog bottom">
                <div className="profile__info">
                    <div className="profile__info-left">
                        <div>
                            <MyProfileAvatar />
                        </div>

                        <div className="profile__info-list">
                            <h4 className="profile__info-name">kuba ssss</h4>

                            <p className="profile__info-desc">
                                {truncatedDescription}
                                <button onClick={toggleDescLimit} className='profile__info-desc_btn'>
                                    {descLimit ? "Ещё" : "Скрыть"}
                                </button>
                            </p>

                            {descLimit && (
                                    <p className="profile__info-addit">
                                    12000 подписчиков | 12 подписки | 12 друзей
                                </p>
                                )}
                        </div>
                    </div>
                    <div className="profile__info-right">
                        <div className="profile__info-btns">
                            <button className="profile__info-btn">
                                Редактировать профиль
                                <LiaUserEditSolid className="profile__info-btn_icon" />
                            </button>
                            <button className="profile__info-btn">
                                Настройки
                                <CiSettings className="profile__info-btn_icon" />
                            </button>
                            <MoreMenuBtn />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

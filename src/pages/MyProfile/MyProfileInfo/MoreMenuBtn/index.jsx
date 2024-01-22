import React, {useState} from "react";
import {MdExpandMore, MdKeyboardArrowUp} from "react-icons/md";
import {TfiStatsUp} from "react-icons/tfi";
import {IoIosArrowUp} from "react-icons/io";

export default () => {

    const [moreMenu, setMoreMenu] = useState(false)

    const toggleMoreMenu = () => setMoreMenu(!moreMenu)
    const closeMoreMenu = () => setMoreMenu(false)

    return (
        <>
            <div  className={`profile__info-btn ${moreMenu ? 'open' : ''}`} onClick={toggleMoreMenu}>
                Ещё
                {
                    !moreMenu ? (
                        <MdExpandMore className='profile__info-btn_icon'/>
                    ) : (
                        <MdKeyboardArrowUp className='profile__info-btn_icon'/>
                    )
                }
                <div className={`moremenu ${moreMenu ? 'open' : ''}`}>
                    <button className='moremenu__btn'>
                        Статистика профиля
                        <TfiStatsUp className='moremenu__btn-icon' />
                    </button>
                    <button className='moremenu__btn'>
                        Статистика профиля
                        <TfiStatsUp className='moremenu__btn-icon' />
                    </button>
                    <button className='moremenu__btn'>
                        Статистика профиля
                        <TfiStatsUp className='moremenu__btn-icon' />
                    </button>
                </div>
            </div>
            <div className={`overlay ${moreMenu ? 'open' : ''}`} onClick={closeMoreMenu}></div>
        </>
    )
};
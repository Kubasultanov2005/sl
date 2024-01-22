import React, {useState} from "react";
import Avatar from "../../../../components/Avatar";
import {CiLogout, CiSettings} from "react-icons/ci";
import {MdOutlineDarkMode, MdOutlineLightMode} from "react-icons/md";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {IoCheckmarkOutline} from "react-icons/io5";
import {VscColorMode} from "react-icons/vsc";
import {useDispatch, useSelector} from "react-redux";
import {toggleMode} from "../../../../features/store";

export default () => {

    const [openMenu, setOpenMenu] = useState(false)
    const [openTheme, setOpenTheme] = useState(false)

    const dispatch = useDispatch();
    const {mode} = useSelector((state) => state.theme);

    const toggleOpenResult = () => setOpenMenu(!openMenu)

    const toggleOpenTheme = () => setOpenTheme(!openTheme)
    const closeOpenTheme = () => setOpenTheme(false)

    const closeOpenResult = () => {
        closeOpenTheme()
        setOpenMenu(false)
    }

    return (
        <>
            <div className='header__auth'>
                <div onClick={toggleOpenResult}>
                    <Avatar src='' className='header__auth-avatar' onClick={toggleOpenResult}/>
                </div>
                <div className={`header__menu ${openMenu ? 'open' : ''}`}>
                    <div className='header__menu-btns'>
                        <button className='header__menu-btn'>
                            <CiSettings className='header__menu-btn_icon'/>
                            Настройки
                        </button>
                        <button className={`header__menu-btn theme ${openTheme ? 'open' : ''}`} onClick={toggleOpenTheme}>
                            {
                                mode === 'day' ? (
                                    <MdOutlineLightMode className='header__menu-btn_icon'/>
                                ) : mode === 'night' ? (
                                    <MdOutlineDarkMode className='header__menu-btn_icon'/>
                                ) : (
                                    <VscColorMode className='header__menu-btn_icon'/>
                                )
                            }
                            Тема
                            {
                                openTheme ? (
                                    <IoIosArrowUp className='header__menu-btn_icon theme'/>
                                ) : (
                                    <IoIosArrowDown className='header__menu-btn_icon theme'/>
                                )
                            }
                            <div className={`header__theme ${openTheme ? 'open' : ''}`}>
                                <button className="header__theme-btn" onClick={() => {
                                    dispatch(toggleMode('day'))
                                    closeOpenResult()
                                }}>
                                    <MdOutlineLightMode className='header__menu-btn_icon'/>
                                    Дневная
                                    {
                                        mode === 'day' ? (
                                            <IoCheckmarkOutline className='header__theme-btn_icon'/>
                                        ) : ''
                                    }
                                </button>
                                <button className="header__theme-btn" onClick={() => {
                                    dispatch(toggleMode('night'))
                                    closeOpenResult()
                                }}>
                                    <MdOutlineDarkMode className='header__menu-btn_icon'/>
                                    Ночная
                                    {
                                        mode === 'night' ? (
                                            <IoCheckmarkOutline className='header__theme-btn_icon'/>
                                        ) : ''
                                    }
                                </button>
                                {/*<button className="header__theme-btn" onClick={() => {*/}
                                {/*    dispatch(toggleMode('system'))*/}
                                {/*    closeOpenResult()*/}
                                {/*}}>*/}
                                {/*    <VscColorMode className='header__menu-btn_icon'/>*/}
                                {/*    Системная*/}
                                {/*    {*/}
                                {/*        mode === 'system' ? (*/}
                                {/*            <IoCheckmarkOutline className='header__theme-btn_icon'/>*/}
                                {/*        ) : ''*/}
                                {/*    }*/}
                                {/*</button>*/}
                            </div>
                        </button>
                        <button className='header__menu-btn logout'>
                            <CiLogout className='header__menu-btn_icon logout'/>
                            Выйти
                        </button>
                    </div>
                </div>
            </div>
            <div className={`overlay ${openMenu ? 'open' : ''}`} onClick={() => {
                closeOpenResult()
            }}></div>

        </>

)
};
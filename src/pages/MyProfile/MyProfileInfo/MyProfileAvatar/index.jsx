import React, {useState} from "react";
import Avatar from "../../../../components/Avatar";
import {MdDeleteOutline, MdOutlineAddAPhoto} from "react-icons/md";

export default () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenuOpen = () => setMenuOpen(!menuOpen)
    const closeMenuOpen = () => setMenuOpen(false)

    return (
        <>
            <div className={`profile__info-avatar_click ${menuOpen ? 'open' : ''}`}  onClick={toggleMenuOpen} >
                <Avatar src='' className='profile__info-avatar' />
                <div className={`avamenu ${menuOpen ? 'open' : ''}`}>
                    <button className='avamenu__btn'>
                        <MdOutlineAddAPhoto className='avamenu__btn-icon'/>
                        Загрузить фотографию
                    </button>
                    {/*<button className='avamenu__btn'>*/}
                    {/*    <MdOutlineAddAPhoto className='avamenu__btn-icon'/>*/}
                    {/*    Изменить фотографию*/}
                    {/*</button>*/}
                    <button className='avamenu__btn delete'>
                        <MdDeleteOutline className='avamenu__btn-icon delete'/>
                        Удалить фотографию
                    </button>
                </div>
            </div>
            <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenuOpen}></div>
        </>
    )
};
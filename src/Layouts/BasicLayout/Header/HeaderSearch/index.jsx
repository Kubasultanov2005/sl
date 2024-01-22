import React, {useState} from "react";
import {IoCloseOutline, IoSearchOutline} from "react-icons/io5";
import User from "../../../../components/User";

export default () => {

    const [openResult, setOpenResult] = useState(false)

    const toggleOpenResult = () => setOpenResult(true)
    const closeOpenResult = () => setOpenResult(false)

    return (
        <>
            <div className={`header__search ${openResult ? 'open' : ''}`}>
                <input onFocus={toggleOpenResult} type="text" className={`header__search-input ${openResult ? 'open' : ''}`} placeholder='Поиск...'/>
                <IoSearchOutline className='header__search-icon'/>
                {openResult ? (
                    <IoCloseOutline className='header__search-icon close' onClick={closeOpenResult}/>
                ) : ''}
                <div className={`header__search-result ${openResult ? 'open' : ''}`}>
                   <div>
                       <div className='header__search-result-loading'></div>
                   </div>
                    <div className="header__search-result_item">
                        <User/>
                        <User/>
                        <User/>
                        <User/>
                        <User/>
                        <User/>
                        <User/>
                        <User/>
                        <User/>
                        <User/>
                        <User/>
                        <User/>
                    </div>
                </div>
            </div>
            <div className={`overlay ${openResult ? 'open' : ''}`} onClick={closeOpenResult}></div>
        </>
    )
};
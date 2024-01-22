import React from "react";
import {IoCheckmarkCircleOutline} from "react-icons/io5";

export default () => {
    return (
        <>
            <div className="create__final">
                <IoCheckmarkCircleOutline className='create__final-icon'/>
                <p className="create__final-title">
                    Пост создан
                </p>
                <button className='create__final-btn'>
                    Вернуться на главную
                </button>
                {/*<div className='create__loading-icon' ></div>*/}
            </div>

        </>
    )
};
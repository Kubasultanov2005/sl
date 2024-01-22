import React from "react";
import {IoMdImages} from "react-icons/io";

export default ({nextPage}) => {
    return (
        <>
            <div className="create__no">
                <IoMdImages className='create__no-icon'/>
                <p className="create__no-title">
                    Выберите фото поста
                </p>
                <button className='create__no-btn' onClick={nextPage}>
                    Выбрать
                </button>
            </div>
        </>
    )
};
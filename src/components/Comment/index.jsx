import React from "react";
import Avatar from "../Avatar";
import {CiHeart} from "react-icons/ci";

export default () => {
    return (
        <>
            <div className='comment'>
                <div className='commment__left'>
                    <Avatar src='' className='comment__avatar'/>
                </div>
                <div className='comment__right'>
                    <h5 className="comment__name">
                        Remanga | читать мангу на русском
                    </h5>
                    <div className='comment__content'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab blanditiis dolores earum fuga nesciunt officiis possimus quas, quos saepe sapiente tempore vitae voluptates. Beatae culpa dignissimos est incidunt iure nulla officia quaerat sint tempora velit! Ducimus laudantium reiciendis rem? At, consequuntur delectus in ipsa nesciunt quibusdam sequi velit. Quod?
                    </div>
                    <div className="comment__info">
                        <p className="comment__time">
                            Сегодня в 11:00
                        </p>
                        <button className='comment__btn'>
                            <CiHeart className='comment__btn-icon'/>
                            12
                        </button>
                    </div>
                    <div className='comment__hr'></div>
                </div>
            </div>
        </>
    )
};
import React from "react";
import {CiHeart} from "react-icons/ci";
import {BiCommentDetail} from "react-icons/bi";
import {PiShareFat} from "react-icons/pi";
import {MdOutlineRemoveRedEye} from "react-icons/md";

export default ({toggleOpenComments, openComments}) => {
    return (
        <>
            <div className="post__bottom">
                <div className="post__bottom-left">
                    <button className='post__btn like'>
                        <CiHeart className='post__btn-icon'/>
                        12
                    </button>
                    <button className={`post__btn ${openComments ? 'active' : ''}`} onClick={toggleOpenComments}>
                        <BiCommentDetail className='post__btn-icon'/>
                        12
                    </button>
                    <button className='post__btn share'>
                        <PiShareFat className='post__btn-icon'/>
                        12
                    </button>
                </div>
                <div className="post__bottom-right">
                    <p className='post__viewcount'>
                        <MdOutlineRemoveRedEye />
                        5K
                    </p>
                </div>
            </div>
        </>
    )
};
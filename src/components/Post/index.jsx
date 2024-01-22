import React, {useState} from "react";
import Avatar from "../Avatar";
import {IoIosMore} from "react-icons/io";
import {CiHeart} from "react-icons/ci";
import {BiCommentDetail} from "react-icons/bi";
import {PiShareFat} from "react-icons/pi";
import {MdOutlineRemoveRedEye} from "react-icons/md";
import PostTop from "./PostTop";
import PostDesc from "./PostDesc";
import PostContent from "./PostContent";
import PostBottom from "./PostBottom";
import PostComment from "./PostComment";
import Comment from "../Comment";

export default () => {

    const [openComments, setOpenComments] = useState(true)

    const toggleOpenComments = () => setOpenComments(!openComments)

    return (
       <>
           <div className='blog'>
               <div className='post'>
                   <PostTop/>
                   <PostDesc/>
                   <PostContent/>
                   <PostBottom toggleOpenComments={toggleOpenComments} openComments={openComments}/>
                   {
                       openComments ? (
                           <>
                               <div className='post__hr'></div>
                               <PostComment/>
                           </>
                       ) : ''
                   }
               </div>
           </div>
           <div style={{height: '20px'}}></div>
       </>

    )
};
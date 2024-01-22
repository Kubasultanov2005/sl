import React, {useState} from "react";
import Comment from "../../Comment";
import {MdAttachment, MdExpandMore, MdOutlineCameraAlt} from "react-icons/md";
import {IoIosArrowUp} from "react-icons/io";
import Avatar from "../../Avatar";
import {CiFaceSmile} from "react-icons/ci";
import {AiOutlineSend} from "react-icons/ai";

export default () => {

    const [onLimitComment, setOnLimitComment] = useState(false)
    const [limit, setLimit] = useState(300)
    const [value, setValue] = useState('')

    const toggleLimit = () => setOnLimitComment(!onLimitComment)
    const closeLimit = () => setOnLimitComment(false)

    const [message, setMessage] = useState("");

    const maxRows = 5; // Максимальное количество строк

    const handleMessageChange = (e) => {
        const lines = e.target.value.split("\n").length;
        if (lines <= maxRows) {
            setMessage(e.target.value);
        }
    };

    const sendMessage = () => {
        // Ваша логика отправки сообщения, например, вызов функции для отправки на сервер
        console.log("Отправка сообщения:", message);

        // Очистка поля ввода после отправки сообщения
        setMessage("");
    };

    return (
        <>
            <div className="post__comment">
                <div className='header__search-result-loading' style={{margin: '20px auto'}}></div>
                <Comment/>
                {
                    onLimitComment ? (
                        <>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                        </>
                    ) : ''
                }
                <button className='post__comment-btn' onClick={toggleLimit}>
                    Показать {onLimitComment ? 'меньше' : 'ещё'} комментарии
                    {
                        !onLimitComment  ? (
                            <MdExpandMore className='post__comment-btn_icon'/>
                        ) : (
                            <IoIosArrowUp className='post__comment-btn_icon'/>
                        )
                    }
                </button>

                <div className='addcomment'>
                    <div className='addcomment__left'>
                        <Avatar src='' className='addcomment__avatar'/>
                    </div>
                    <div className='addcomment__center'>
                        <textarea
                            className='addcomment__input'
                            placeholder='Написать комментарий'
                            rows='7'
                            value={value}
                            maxLength={limit}
                            onChange={(e) => setValue(e.target.value)}
                        >

                        </textarea>
                        <p className='addcomment__input-limit'>
                            {
                                value.split('').length
                            } / {limit}
                        </p>
                        <div className="addcomment__btns">
                            {/*<button className='addcomment__btn'>*/}
                            {/*    <MdAttachment className='addcomment__btn-icon'/>*/}
                            {/*</button>*/}
                            <button className='addcomment__btn'>
                                <MdOutlineCameraAlt className='addcomment__btn-icon'/>
                            </button>
                            <button className='addcomment__btn'>
                                <CiFaceSmile className='addcomment__btn-icon'/>
                            </button>
                        </div>
                    </div>
                    <div className='addcomment__right'>
                        <button className='addcomment__add'>
                            <AiOutlineSend className='addcomment__add-icon'/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};
import React, {useState} from "react";
import Avatar from "../../Avatar";
import {CiSettings} from "react-icons/ci";
import {IoChevronDown} from "react-icons/io5";

export default () => {

    const [value, setValue] = useState('')
    const [limit, setLimit] = useState(500)
    const [settingOpen, setSettingOpen] = useState(false)

    return (
        <>
            <div className="create__info">
                <div className="create__info-user">
                    <Avatar src='' className='create__info-user_avatar'/>
                    <h5 className='post__info-name'>Аниме | игры плюшки</h5>
                </div>
                <div className='post__info-desc'>
                        <textarea
                            className='create__info-input'
                            placeholder='Опишите свой пост...'
                            rows='10'
                            maxLength={limit}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        >
                        </textarea>
                    <p className='create__info-input-limit'>
                        {
                            value.split('').length
                        } / {limit}
                    </p>
                </div>
                <div className="create__settings">
                    <button className='create__setting' onClick={() => setSettingOpen(!settingOpen)}>
                        <div className="create__setting-left">
                            <CiSettings className='create__setting-icon'/>
                            Настройки
                        </div>
                        <div className="create__setting-right">
                            <IoChevronDown className='create__setting-icon'/>
                        </div>
                    </button>
                    {
                        settingOpen ? (
                            <>
                                <div className="create__settings-item">
                                    Выключить комментарии
                                    <label className="small-switch">
                                        <input type="checkbox"  />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                                <div className="create__settings-item">
                                    Скрывать число просмотров и лайков
                                    <label className="small-switch">
                                        <input type="checkbox"  />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                            </>
                        ) : ''
                    }
                </div>
            </div>
        </>
    )
};
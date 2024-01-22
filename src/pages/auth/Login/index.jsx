import React, {useState} from "react";
import {Link} from "react-router-dom";
import {AUTH_REGISTER} from "../../../utils/routeNames";

export default () => {

    const [isLoading, setIsLoading] = useState(false)

    return (
        <>
            <div className='container-small'>
                <div className='auth'>
                    <h1 className="auth__logo">
                        С возвращением!
                    </h1>
                    <h3 className="auth__title">
                        Войдите в аккаунт
                    </h3>
                    <div className='auth__list'>

                        <div className='auth__item'>
                            <label className='auth__item-label'>
                                Логин
                            </label>
                            <div className='auth__item-input'>
                                <input
                                    type="text"
                                    placeholder='Введите ваш логин'
                                />
                                {/*<IoCheckmarkOutline className='auth__item-input_icon'/>*/}
                                {/*<RxCross2 className='auth__item-input_icon error'/>*/}
                                {/*<div className='auth__item-input_icon-loading'></div>*/}
                            </div>
                            {/*<p className='auth__item-desc'></p>*/}
                            {/*<p className='auth__item-desc error'></p>*/}

                        </div>

                        <div className='auth__item'>
                            <label className='auth__item-label'>
                                Пароль
                            </label>
                            <div className='auth__item-input'>
                                <input
                                    type="password"
                                    placeholder='Введите пароль'
                                />
                                {/*<IoCheckmarkOutline className='auth__item-input_icon'/>*/}
                                {/*<RxCross2 className='auth__item-input_icon error'/>*/}
                                {/*<div className='auth__item-input_icon-loading'></div>*/}
                            </div>
                            {/*<p className='auth__item-desc'></p>*/}
                            {/*<p className='auth__item-desc error'></p>*/}

                        </div>


                    </div>

                    <div className='auth__checkbox'>
                        <input type="checkbox"/>
                        Показать пароль
                    </div>

                    <div className='auth__row'>

                        <Link to={AUTH_REGISTER} className='auth__link'>
                            Создать аккаунт
                        </Link>

                        <button type='submit' onClick={() => setIsLoading(!isLoading)} className={`auth__btn
                    ${isLoading ? 'loading' : ''}
                        `}>
                            {
                                isLoading ? (
                                    <div className='auth__item-input_icon-loading btn'></div>
                                ) : 'Войти'
                            }

                        </button>

                    </div>

                    <div className='auth__subtitle'>
                        Нажимая «Войти», вы принимаете <Link to='/use' className='auth__subtitle-link'>
                        пользовательское соглашение
                    </Link> и <Link to='/privacy-policy' className='auth__subtitle-link'>
                        политику конфиденциальности
                    </Link>
                    </div>

                </div>
            </div>
            <div className={`overlay small ${isLoading ? 'open' : ''}`} onClick={() => setIsLoading(false)}></div>
        </>
    )
};
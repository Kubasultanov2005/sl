import React, {useEffect, useRef, useState} from "react";
import {IoCheckmarkOutline} from "react-icons/io5";
import {Link} from "react-router-dom";
import {AUTH_LOGIN} from "../../../utils/routeNames";
import {RxCross2} from "react-icons/rx";
import {ClipLoader} from "react-spinners";
import {IoMdArrowBack} from "react-icons/io";

export default () => {

    const [nextPage, setNextPage] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    return (
       <>
           <div className='container-small'>
               <div className={`auth ${nextPage ? 'next' : ''}`}>
                   <h1 className="auth__logo">
                       Добро пожаловать!
                   </h1>
                   <h3 className="auth__title">
                       Создать аккаунт
                   </h3>
                   <div className='auth__list'>

                       {
                           !nextPage ? (
                               <>
                                   <div className='auth__item'>
                                       <label className='auth__item-label'>
                                           Имя
                                       </label>
                                       <div className='auth__item-input'>
                                           <input
                                               type="text"
                                               placeholder='Укажите ваше имя'
                                           />
                                           {/*<IoCheckmarkOutline className='auth__item-input_icon'/>*/}
                                           {/*<RxCross2 className='auth__item-input_icon error'/>*/}
                                           {/*<div className='auth__item-input_icon-loading'></div>*/}
                                       </div>
                                       {/*<p className='auth__item-desc'></p>*/}
                                       {/*<p className='auth__item-desc error'>*/}
                                       {/*    Пароль должен содержать от 8 до 16 символов, и минимум одну заглавную букву*/}
                                       {/*</p>*/}

                                   </div>

                                   <div className='auth__item'>
                                       <label className='auth__item-label'>
                                           Фамилия
                                       </label>
                                       <div className='auth__item-input'>
                                           <input
                                               type="text"
                                               placeholder='Укажите вашу фамилию'
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
                                           E-mail
                                       </label>
                                       <div className='auth__item-input'>
                                           <input
                                               type="text"
                                               placeholder='Укажите вашу почту'
                                           />
                                           {/*<IoCheckmarkOutline className='auth__item-input_icon'/>*/}
                                           {/*<RxCross2 className='auth__item-input_icon error'/>*/}
                                           {/*<div className='auth__item-input_icon-loading'></div>*/}
                                       </div>
                                       {/*<p className='auth__item-desc'></p>*/}
                                       {/*<p className='auth__item-desc error'></p>*/}

                                   </div>
                               </>
                           ) : (
                               <>
                                   <div className='auth__item'>
                                       <label className='auth__item-label'>
                                           Логин
                                       </label>
                                       <div className='auth__item-input'>
                                           <input
                                               type="text"
                                               placeholder='Придумайте логин'
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
                                               type="text"
                                               placeholder='Задайте пароль для входа'
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
                                               type="text"
                                               placeholder='Повторите пароль для входа'
                                           />
                                           {/*<IoCheckmarkOutline className='auth__item-input_icon'/>*/}
                                           {/*<RxCross2 className='auth__item-input_icon error'/>*/}
                                           {/*<div className='auth__item-input_icon-loading'></div>*/}
                                       </div>
                                       {/*<p className='auth__item-desc'></p>*/}
                                       {/*<p className='auth__item-desc error'></p>*/}

                                   </div>
                               </>
                           )
                       }

                   </div>
                   {
                       nextPage ? (
                           <div className='auth__checkbox'>
                               <input type="checkbox"/>
                               Показать пароль
                           </div>
                       ) : ''
                   }

                   <div className='auth__nav'>
                       <div className={`auth__nav-icon ${!nextPage ? 'active' : ''}`}></div>
                       <div className={`auth__nav-icon ${nextPage ? 'active' : ''}`}></div>
                   </div>

                   <div className='auth__row'>

                       {
                           nextPage ? (
                               <div className='auth__link' onClick={() => setNextPage(!nextPage)}>
                                   <IoMdArrowBack className='auth__link-icon'/>
                                   Назад
                               </div>
                           ) : (
                               <Link to={AUTH_LOGIN} className='auth__link'>
                                   Уже есть аккаунт
                               </Link>
                           )
                       }

                       <button type='submit' onClick={() => setNextPage(!nextPage)} className={`auth__btn
                    ${isLoading ? 'loading' : ''}
                        `}>
                           {
                               isLoading ? (
                                   <div className='auth__item-input_icon-loading btn'></div>
                               ) : 'Продолжить'
                           }

                       </button>

                   </div>


                   <div className='auth__subtitle'>
                       Нажимая «Продолжить», вы принимаете <Link to='/use' className='auth__subtitle-link'>
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
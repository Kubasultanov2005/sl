import React, { useState } from "react";
import { IoMdArrowBack, IoMdImages } from "react-icons/io";
import CreateNo from "./CreateNo";
import CreateContent from "./CreateContent";
import CreateSetting from "./CreateSetting";
import CreateFinal from "./CreateFinal";
import Avatar from "../Avatar";
import CreateInfo from "./CreateInfo";
import {useDispatch, useSelector} from "react-redux";
import {closeCreateModal} from "../../features/store";

export default () => {

    const {create} = useSelector(store => store.modals)

    const dispatch = useDispatch()

    const [page, setPage] = useState(0);

    const nextPage = () => {
        setPage(page + 1);
    };

    const prevPage = () => {
        setPage(page - 1);
    };

    const renderPageContent = () => {
        switch (page) {
            case 0:
                return <CreateNo nextPage={nextPage}/>;
            case 1:
                return <CreateContent />;
            case 2:
                return <CreateContent />;
            case 3:
                return <CreateFinal />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className={`create ${create ? 'open' : ''}`}>
                <div className="create__top">
                    {
                        page === 0 || page === 3 ? (<div style={{width: '50px'}}></div>) : (
                            <div className="auth__link" onClick={prevPage}>
                                <IoMdArrowBack className="auth__link-icon" />
                                Назад
                            </div>
                        )
                    }
                    <h5 className="create__title">Создание поста</h5>
                    {
                        page === 3 ? (<div style={{width: '50px'}}></div>) : (
                            <div className="auth__link" onClick={nextPage}>
                                Далее
                            </div>
                        )
                    }

                </div>
                <div className="create__row">
                    <div className="create__blog">
                        {renderPageContent()}
                        {
                            page === 3 ? '' : (
                                <div className="create__step">
                                    {page + 1} шаг из 4
                                </div>
                            )
                        }
                    </div>
                    {page === 2 ? (<CreateInfo/>) : ''}
                </div>
            </div>

            <div className={`create__overlay ${create ? 'open' : ''}`} onClick={() => dispatch(closeCreateModal())}></div>
            {/*<div className="overlay cra"></div>*/}

        </>
    );
};

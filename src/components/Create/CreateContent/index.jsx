import React, {useState} from "react";
import {IoCaretBackCircleOutline, IoCaretForwardCircleOutline} from "react-icons/io5";
import {MdOutlineAddPhotoAlternate} from "react-icons/md";

export default () => {

    const images = [
        'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg',
        'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
        'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg',
        'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    return (
        <>
            <div className="create__content">
                <div className='post__content'>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`post__content-image ${index === currentSlide ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${image})` }}
                        ></div>
                    ))}
                    <button className="create__content-btn">
                        <MdOutlineAddPhotoAlternate className='create__content-btn_icon'/>
                    </button>
                    {(images.length !== 1) && (
                        <>
                            <button onClick={prevSlide} className='post__content-btn left'>
                                <IoCaretBackCircleOutline className='post__comment-btn_icon'/>
                            </button>
                            <button onClick={nextSlide} className='post__content-btn right'>
                                <IoCaretForwardCircleOutline className='post__comment-btn_icon'/>
                            </button>
                        </>
                    )}
                </div>
                {(images.length !== 1) && (
                    <div className="post__content-dots">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`post__content-dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            ></span>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
};
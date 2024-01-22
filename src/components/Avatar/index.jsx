import React, {useState} from "react";

export default (props) => {

    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };


    return (
        <>
            {!imageError ? (
                <img
                    alt="avatar"
                    className={`${props.className} avatar`}
                    onError={handleImageError}
                    {...props}
                />
            ) : (
                <img
                    src='https://yt3.ggpht.com/a/default-user=s600-k-no-rp-mo'
                    alt="avatar"
                    className={`${props.className} avatar`}
                    onError={handleImageError}
                    onClick={props.onClick}
                />
            )}
        </>
    )
};
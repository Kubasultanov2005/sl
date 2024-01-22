import React from "react";
import Post from "../../components/Post";
import Create from "../../components/Create";

export default () => {
    return (
        <div className='home'>
            <div className='header__search-result-loading' style={{margin: '20px auto'}}></div>

            <Post/>
            <Post/>

            {/*<Create/>*/}
        </div>
    )
};
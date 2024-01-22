import React from "react";
import {Link} from "react-router-dom";
import {BASIC} from "../../../../utils/routeNames";

export default () => {
    return (
        <Link to={BASIC}>
            <h1 className="header__logo">
                SLIFE
            </h1>
        </Link>
    )
};

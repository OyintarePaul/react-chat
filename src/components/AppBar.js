import { createElement as r } from "https://cdn.skypack.dev/react";
import { useNavigate } from "https://cdn.skypack.dev/react-router-dom";
import {
    MDBTypography,
    MDBIcon,
} from "https://cdn.skypack.dev/mdb-react-ui-kit";

import Header from "./Header.js";
import Logout from "./Logout.js";

function AppBar({ heading }) {
    const navigate = useNavigate();
    return r(
        Header,
        null,
        r(
            "div",
            { className: "d-flex align-items-center" },
            r(
                MDBTypography,
                { tag: "h1", variant: "h3", className: "flex-grow-1" },
                heading
            ),
            r(Logout)
        )
    );
}

export default AppBar;

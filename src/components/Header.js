import React, { createElement as r } from "https://cdn.skypack.dev/react";
import { MDBContainer } from "https://cdn.skypack.dev/mdb-react-ui-kit";

function Header({ children }) {
    return r(MDBContainer, { className: "py-2" }, children);
}

export default Header;

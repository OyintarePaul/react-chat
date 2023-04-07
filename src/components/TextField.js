//#E0E0E0
import React, { createElement as r } from "https://cdn.skypack.dev/react";
function TextField({ placeholder, startIcon, ...rest }) {
    let c = startIcon ? "ps-5 pe-2 py-2" : "p-2";

    return r(
        "div",
        {
            style: { backgroundColor: "#E0E0E0" },
            className: c + " " + "rounded-pill position-relative",
        },
        r("input", {
            type: "text",
            style: { outline: "none" },
            placeholder,
            className: "d-block bg-transparent border border-0 outline-0",
            ...rest,
        }),
        r(
            "span",
            {
                className: "position-absolute",
                style: { top: "10px", left: "15px" },
            },
            startIcon
        )
    );
}
export default TextField;

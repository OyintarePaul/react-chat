import { createElement as r } from "https://cdn.skypack.dev/react";

function IconButton({ children, color, ...rest }) {
    return r(
        "button",
        {
            className: "border-0 rounded-circle bg-white",
            ...rest,
        },
        children
    );
}

export default IconButton;

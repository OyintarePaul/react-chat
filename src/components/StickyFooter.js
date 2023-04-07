import { createElement as r } from "https://cdn.skypack.dev/react";

function StickyFooter({ children }) {
    return r(
        "div",
        { className: "w-100 py-2 bg-white fixed-bottom" },
        children
    );
}
export default StickyFooter;

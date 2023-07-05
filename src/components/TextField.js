import React, { createElement as r } from "https://cdn.skypack.dev/react";
function TextField({ placeholder, startIcon, ...rest }) {
  return r(
    "div",
    {
      style: { backgroundColor: "#ececec" },
      className: "p-3 rounded-pill position-relative d-flex align-items-center",
    },

    r("span", { className: "me-2" }, startIcon),
    r("input", {
      type: "text",
      style: { outline: "none" },
      placeholder,
      className: "flex-grow-1 bg-transparent border border-0 outline-0",
      ...rest,
    })
  );
}
export default TextField;

import React, { createElement as r } from "https://cdn.skypack.dev/react";

function Header({ children }) {
  return r("div", { className: "py-2 mb-1 container" }, children);
}

export default Header;

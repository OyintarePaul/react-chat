import { createElement as r } from "https://cdn.skypack.dev/react";
import { useNavigate } from "https://cdn.skypack.dev/react-router-dom";

import Header from "./Header.js";
import Logout from "./Logout.js";

function AppBar({ heading }) {
  const navigate = useNavigate();
  return r(
    Header,
    null,
    r(
      "div",
      { className: "d-flex align-items-center mb-3" },
      r("h1", { className: "flex-grow-1 mb-0" }, heading),
      r(Logout)
    )
  );
}

export default AppBar;

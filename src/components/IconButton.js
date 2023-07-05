import { createElement as r } from "https://cdn.skypack.dev/react";

function IconButton({ size, children, color, ...rest }) {
  return r(
    "button",
    {
      className: "btn-floating btn-lg bg-white btn-outline-primary",
      ...rest,
    },
    children
  );
}

export default IconButton;

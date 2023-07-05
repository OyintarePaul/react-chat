import { createElement as r, useEffect } from "https://cdn.skypack.dev/react";
import { useNavigate } from "https://cdn.skypack.dev/react-router-dom";
import { getLoginDetails } from "../server/users.js";

import { localSignin } from "../server/users.js";
function CoverScreen(props) {
  const navigate = useNavigate();
  useEffect(() => {
    //   const autoLogin = async () => {
    //     const details = getLoginDetails();
    //     if (details) {
    //       const { email, password } = details;
    //       const user = await localSignin(email, password);
    //       if (user.id)
    //         navigate("/find-friends", {
    //           replace: true,
    //         });
    //     } else {
    //       navigate("/login", {
    //         replace: true,
    //       });
    //     }
    //   };
    let timer = setTimeout(() => {
      navigate("/login", {
        replace: true,
      });
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return r(
    "div",
    {
      className: "w-100 d-flex justify-content-center align-items-center",
      style: {
        height: "100vh",
      },
    },
    r(
      "div",
      {
        className: "text-center",
      },
      r("img", {
        src: "/public/images/lets-chat.png",
        width: "100px",
        height: "auto",
        className: "mb-4 d-block",
      }),
      r(
        "div",
        {
          className: "spinner-border",
          role: "status",
          style: { width: "2rem", height: "2rem", color: "skyblue" },
        },
        r("span", { className: "visually-hidden" }, "One moment please ...")
      )
    )
  );
}

export default CoverScreen;

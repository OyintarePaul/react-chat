import {
  createElement as r,
  useState,
  useEffect,
  useContext,
} from "https://cdn.skypack.dev/react";

import { Link, useNavigate } from "https://cdn.skypack.dev/react-router-dom";

import { localSignup } from "../server/users.js";

function Signup(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await localSignup(username, email, password);
    if (user.id)
      navigate("/find-friends", {
        replace: true,
      });
  };
  const handleGoogleSignin = async () => {
    console("Google Sign in");
  };
  return r(
    "div",
    null,
    r(
      "div",
      {
        className: "px-5 pt-5 pb-3 text-center",
      },

      r("h2", null, "Sign up"),
      r("img", {
        src: "/public/images/people-chatting.jpg",
        alt: "",
        width: "220px",
        height: "auto"
      }),
      r(
        "p",
        {
          className: "text-muted",
        },
        "Your family and friends are waiting for you"
      )
    ),
    r(
      "div",
      {
        className: "px-4",
      },
      r(
        "form",
        {
          onSubmit: handleSubmit,
        },

        r(
          "div",
          { className: "form-group" },
          r(
            "label",
            { className: "form-label", htmlFor: "username" },
            "Username *"
          ),
          r("input", {
            className: "form-control form-control-lg d-block mb-3 rounded-2",
            id: "username",
            type: "username",
            onChange: (e) => setUsername(e.target.value),
          })
        ),

        r(
          "div",
          { className: "form-group" },
          r("label", { className: "form-label", htmlFor: "email" }, "Email *"),
          r("input", {
            className: "form-control form-control-lg d-block mb-3 rounded-2",
            id: "email",
            type: "email",
            onChange: (e) => setEmail(e.target.value),
          })
        ),
        r(
          "div",
          { className: "form-group" },
          r(
            "label",
            { className: "form-label", htmlFor: "password" },
            "Password *"
          ),
          r("input", {
            className: "form-control form-control-lg d-block mb-3 rounded-2",
            id: "password",
            type: "password",
            onChange: (e) => setPassword(e.target.value),
          })
        ),

        r(
          "button",
          {
            className: "bg-primary btn btn-lg d-block w-100 text-white mb-3",
            block: true,
            type: "submit",
          },
          "Sign me in"
        ),
        r(
          "p",
          {
            className: "text-center",
          },
          "I already have an account. I want to ",
          r(
            Link,
            {
              to: "/login",
            },
            "login"
          ),
          " instead"
        )
      )
    )
  );
}

export default Signup;

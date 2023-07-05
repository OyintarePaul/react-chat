import {
  createElement as r,
  useState,
  useEffect,
} from "https://cdn.skypack.dev/react";
import { Link, useNavigate } from "https://cdn.skypack.dev/react-router-dom";

import { localSignin } from "../server/users.js";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signing in... first");
    const user = await localSignin(email, password);
    console.log("Signing in... second");
    if (user.id) navigate("/find-friends", { replace: true });
  };
  return r(
    "div",
    null,
    r(
      "div",
      { className: "px-5 pt-5 pb-3 text-center" },
      r("h2", null, "Hi, Buddy"),
      r("img", {
        src: "/public/images/man-using-mobile-phone.png",
        alt: "",
        width: "130px",
        height: "auto",
      }),
      r(
        "p",
        { className: "text-muted" },
        "Connect with your family and friends now"
      )
    ),
    r(
      "div",
      { className: "px-4" },
      r(
        "form",
        { onSubmit: handleSubmit },
        r(
          "div",
          { className: "form-group" },
          r("label", { className: "form-label", htmlFor: "email" }, "Email *"),
          r("input", {
            className: "form-control form-control-lg d-block mb-3 rounded-2",
            id: "email",
            type: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
          })
        ),
        r(
          "div",
          { className: "form-group" },
          r(
            "label",
            { className: "form-label", htmlFor: "password", required: true },
            "Password *"
          ),
          r("input", {
            className: "form-control form-control-lg d-block mb-3 rounded-2",
            id: "password",
            type: "password",
            value: password,
            required: true,
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
          "Login"
        ),
        r(
          "p",
          { className: "text-center" },
          "I am new. I want to ",
          r(Link, { to: "/signup" }, "sign up"),
          " instead"
        )
      )
    )
  );
}

export default Login;

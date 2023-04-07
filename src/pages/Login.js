import {
    createElement as r,
    useState,
    useEffect,
} from "https://cdn.skypack.dev/react";
import {
    MDBContainer,
    MDBInput,
    MDBBtn,
} from "https://cdn.skypack.dev/mdb-react-ui-kit";
import { Link, useNavigate } from "https://cdn.skypack.dev/react-router-dom";

import { localSignin } from "../server/users.js";
function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await localSignin(email, password);
        if (user.id) navigate("/find-friends", { replace: true });
    };
    return r(
        MDBContainer,
        null,
        r(
            "div",
            { className: "px-5 pt-5 pb-3 text-center" },
            r("h2", null, "Hi, Buddy"),
            r("img", {
                src: "/public/images/man-using-mobile-phone.png",
                alt: "",
                width: "130px",
            }),
            r(
                "p",
                { className: "text-muted" },
                "Connect with your family and friends now"
            )
        ),
        r(
            "div",
            { className: "px-3" },
            r(
                "form",
                { onSubmit: handleSubmit },
                r(MDBInput, {
                    className: "d-block mb-3 rounded-pill",
                    required: true,
                    id: "email",
                    label: "Email",
                    type: "email",
                    size: "lg",
                    onChange: (e) => setEmail(e.target.value),
                }),
                r(MDBInput, {
                    className: "d-block mb-3 rounded-pill",
                    required: true,
                    id: "password",
                    label: "Password",
                    type: "password",
                    size: "lg",
                    onChange: (e) => setPassword(e.target.value),
                }),
                r(
                    "button",
                    {
                        className:
                            "bg-primary btn btn-lg d-block w-100 text-white mb-3",
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

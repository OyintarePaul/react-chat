import {
    createElement as r,
    useState,
    useEffect,
    useContext,
} from "https://cdn.skypack.dev/react";
import {
    MDBContainer,
    MDBInput,
    MDBBtn,
} from "https://cdn.skypack.dev/mdb-react-ui-kit";
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
        if (user.id) navigate("/find-friends", {replace: true});
    };
    const handleGoogleSignin = async () => {
        console("Google Sign in");
    };
    return r(
        MDBContainer,
        null,
        r(
            "div",
            { className: "px-5 pt-5 pb-3 text-center" },
            r("h2", null, "Sign up"),
            r(
                "p",
                { className: "text-muted" },
                "Your family and friends are waiting for you"
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
                    id: "username",
                    label: "Username",
                    type: "text",
                    size: "lg",
                    onChange: (e) => setUsername(e.target.value),
                }),
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
                    "Sign me in"
                ),
                r(
                    "p",
                    { className: "text-center" },
                    "I already have an account. I want to ",
                    r(Link, { to: "/login" }, "login"),
                    " instead"
                )
            )
        )
    );
}

export default Signup;

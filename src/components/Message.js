import { createElement as r, useState } from "https://cdn.skypack.dev/react";
import { MDBIcon } from "https://cdn.skypack.dev/mdb-react-ui-kit";
import { useAuth } from "../contexts/authContext.js";

function Message({ message }) {
    const auth = useAuth();
    const m =
        message.senderId == auth.currentUser.uid
            ? "float-end bg-success pe-4"
            : "float-start bg-danger pe-2";

    return r(
        "div",
        { className: "clearfix px-3" },
        r(
            "p",
            {
                style: { maxWidth: "75%" },
                className: `position-relative text-white mb-3 ps-2 py-2 rounded-4 ${m}`,
            },
            message.body,
            message.senderId == auth.currentUser.uid
                ? r(MDBIcon, {
                      fas: true,
                      icon: "check",
                      size: "sm",
                      className: "position-absolute",
                      style: { right: "7px", bottom: "17px" },
                  })
                : null
        )
    );
}

export default Message;

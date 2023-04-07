import {
    createElement as r,
    useState,
    useRef,
} from "https://cdn.skypack.dev/react";
import { MDBIcon } from "https://cdn.skypack.dev/mdb-react-ui-kit";
import { addMessageToFirestore } from "../utils/chats.js";
import { useAuth } from "../contexts/authContext.js";

function MessageBox({ receiverId, sendMessage }) {
    const auth = useAuth();
    const [text, setText] = useState("");
    const inputRef = useRef();

    const handleClick = async () => {
        if (text) {
            const msg = {
                body: text,
                senderId: auth.currentUser.uid,
                receiverId,
                participants: [
                    `${auth.currentUser.uid}-${receiverId}`,
                    `${receiverId}-${auth.currentUser.uid}`,
                ],
            };
            setText("");
            inputRef.current.focus();
            await addMessageToFirestore(msg);
            //sendMessage(msg);
        }
    };
    return r(
        "div",
        { className: "d-flex align-items-center px-2 me-2" },
        r("textarea", {
            placeholder: "Type a message...",
            rows: "1",
            value: text,
            ref: inputRef,
            onChange: (e) => setText(e.target.value),
            id: "type-a-message",
            className: "flex-grow-1 rounded-pill py-2 form-control",
        }),
        r(
            "span",
            {
                style: {
                    width: "45px",
                    height: "45px",
                },
                className: "d-flex justify-content-center align-items-center",
                onClick: handleClick,
            },
            r(MDBIcon, {
                icon: "paper-plane",
                size: "lg",
            })
        )
    );
}

export default MessageBox;

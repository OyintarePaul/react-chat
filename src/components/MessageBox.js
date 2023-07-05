import {
  createElement as r,
  useState,
  useRef,
} from "https://cdn.skypack.dev/react";
import { addMessageToFirestore } from "../utils/chats.js";
import { useAuth } from "../contexts/authContext.js";
import IconButton from "./IconButton.js";
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
    { className: "d-flex align-items-center px-2" },
    r("textarea", {
      placeholder: "Type a message...",
      rows: "1",
      value: text,
      ref: inputRef,
      onChange: (e) => setText(e.target.value),
      id: "type-a-message",
      className: "flex-grow-1 rounded-pill py-2 form-control me-2",
    }),
    r(
      "div",
      null,
      r(
        IconButton,
        { onClick: handleClick },
        r("img", {
          src: "/public/icons/paper-plane.svg",
          width: "18px",
          height: "18px",
        })
      )
    )
  );
}

export default MessageBox;

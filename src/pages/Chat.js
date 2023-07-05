import {
  createElement as r,
  useState,
  useEffect,
} from "https://cdn.skypack.dev/react";
import {
  useLocation,
  useNavigate,
} from "https://cdn.skypack.dev/react-router-dom";
import Header from "../components/Header.js";
import IconButton from "../components/IconButton.js";
import MessageBox from "../components/MessageBox.js";
import Message from "../components/Message.js";
import StickyFooter from "../components/StickyFooter.js";

import { useAuth } from "../contexts/authContext.js";
import useChats from "../hooks/useChats.js";
function ChatHeader({ name, avatar }) {
  const navigate = useNavigate();
  return r(
    Header,
    null,
    r(
      "div",
      { className: "d-flex align-items-center" },
      r(
        "div",
        null,
        r(
          IconButton,
          { onClick: () => navigate(-1) },
          r("img", {
            src: "/public/icons/chevron-back.svg",
            width: "18px",
            height: "18px",
          })
        ),
        r("img", {
          width: "35px",
          height: "35px",
          src: avatar,
          alt: "",
          className: "mx-3 rounded-circle",
        })
      ),
      r("p", { className: "flex-grow-1 mb-0 fw-bold" }, name)
    )
  );
}

function ChatFooter({ receiverId, sendMessage }) {
  return r(StickyFooter, null, r(MessageBox, { receiverId, sendMessage }));
}

function ChatMessages({ messages }) {
  return r(
    "div",
    { style: { marginTop: "1.3rem", marginBottom: "4rem" } },
    messages.map((message, index) => {
      return r(Message, { key: index, message });
    })
  );
}

function Chat() {
  const location = useLocation();
  const auth = useAuth();
  const { id, name, avatar, email } = location.state.user;
  const chats = useChats(auth.currentUser.uid, id);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (chats.length > 0) {
      setMessages(chats);
    }
  }, [chats]);
  useEffect(() => {
    window.scrollTo(0, window.innerHeight);
  });

  const sendMessage = (message) => {
    const newMessages = [...messages, message];
    setMessages(newMessages);
  };
  return r(
    "div",
    null,
    r(ChatHeader, { name, avatar }),
    r(ChatMessages, { messages }),
    r(ChatFooter, { receiverId: id, sendMessage })
  );
}

export default Chat;

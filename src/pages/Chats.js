import React, {
    createElement as r,
    useState,
} from "https://cdn.skypack.dev/react";
import { Link } from "https://cdn.skypack.dev/react-router-dom";

import {
    MDBContainer,
    MDBTypography,
    MDBIcon,
} from "https://cdn.skypack.dev/mdb-react-ui-kit";

import AppBar from "../components/AppBar.js";
import IconButton from "../components/IconButton.js";
import TextField from "../components/TextField.js";
import ChatList from "../components/ChatList.js";

function ChatsHeader() {
    return r(AppBar, { heading: "Chats" });
}

function Chats(props) {
    const [list, setList] = useState([]);
    return r(
        "div",
        null,
        r(ChatsHeader),
        r(
            MDBContainer,
            null,
            r(TextField, {
                placeholder: "Search messages...",
                startIcon: r(MDBIcon, { fas: true, icon: "search" }),
            })
        ),
        r(ChatList, { list }),
        r(BottomTabBar)
    );
}

export default Chats;

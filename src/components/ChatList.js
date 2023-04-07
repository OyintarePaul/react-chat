import { createElement as r } from "https://cdn.skypack.dev/react";
import {
    MDBListGroup,
    MDBListGroupItem,
} from "https://cdn.skypack.dev/mdb-react-ui-kit";

function ChatList({ list }) {
    return r(
        MDBListGroup,
        { className: "mt-3 mb-5 border-0 position-relative" },
        list.map((item, index) => {
            return r(
                MDBListGroupItem,
                {
                    key: index,
                    className:
                        "d-flex justify-content-between align-items-center border-0 px-3",
                },
                r(ChatListItem, {
                    primary: item.primary,
                    secondary: item.secondary,
                    avatar: item.src,
                    date: item.date,
                })
            );
        })
    );
}

function UserAvatar({ avatar }) {
    return r("img", {
        className: "rounded-circle me-3",
        src: avatar,
        alt: "",
        style: { width: "45px", height: "45px" },
    });
}

function ChatListItem({ primary, secondary, avatar, date }) {
    return r(
        "div",
        { className: "d-flex" },
        r(UserAvatar, { avatar }),
        r(
            "div",
            { className: "flex-grow-1" },
            r(
                "p",
                {
                    className: "fw-bold mb-1",
                },
                primary
            ),
            r("p", { className: "text-muted mb-0" }, secondary)
        ),
        r(ChatTime, { date })
    );
}

function ChatTime({ date }) {
    return r(
        "small",
        {
            className: "fw-normal text-muted position-absolute",
            style: { right: "7px", top: "6px" },
        },
        date
    );
}

export default ChatList;

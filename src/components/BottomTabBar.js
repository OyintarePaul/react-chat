import { createElement as r } from "https://cdn.skypack.dev/react";
import {
    MDBBtn,
    MDBIcon,
    MDBCol,
    MDBRow,
    MDBContainer,
} from "https://cdn.skypack.dev/mdb-react-ui-kit";
import {
    useNavigate,
    useLocation,
} from "https://cdn.skypack.dev/react-router-dom";
import StickyFooter from "./StickyFooter.js";

const tabItems = [
    { name: "Chats", iconText: "comment-alt", path: "/chats" },
    { name: "Find Friends", iconText: "user-friends", path: "/find-friends" },
];

function BottomTabBar(props) {
    const navigate = useNavigate();
    const location = useLocation();

    return r(
        StickyFooter,
        null,
        r(
            MDBContainer,
            null,
            r(
                "div",
                { className: "d-flex" },
                tabItems.map((item, index) => {
                    return r(
                        "div",
                        {
                            key: index,
                            style: { flex: "1" },
                        },
                        r(
                            "button",
                            {
                                className: `btn d-block w-100 p-3 ${
                                    location.pathname == item.path
                                        ? "bg-success text-white"
                                        : "bg-white"
                                }`,
                                onClick: () => navigate(item.path),
                            },
                            r(MDBIcon, {
                                icon: item.iconText,
                            }),
                            r("br"),
                            item.name
                        )
                    );
                })
            )
        )
    );
}

export default BottomTabBar;

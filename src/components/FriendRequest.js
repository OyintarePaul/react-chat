import { createElement as r, useState } from "https://cdn.skypack.dev/react";
import { MDBIcon } from "https://cdn.skypack.dev/mdb-react-ui-kit";
import { useAuth } from "../contexts/authContext.js";
import { sendFriendRequest } from "../server/users.js";
function FriendRequest({ friendId }) {
    const [sent, setSent] = useState(false);
    const auth = useAuth();
    const uid = auth.currentUser ? auth.currentUser.uid : null;
    const sendRequest = async (userId, friendId) => {
        const res = await sendFriendRequest(userId, friendId);
        if (res) {
            setSent(true);
        } else {
            setSent("error");
        }
    };

    let bg = "bg-primary";
    let icon = "plus";
    if (sent) {
        bg = "bg-success";
        icon = "check";
    }
    if (sent == "error") {
        bg = "bg-error";
        icon = "redo";
    }

    return r(
        "button",
        {
            className: `btn ${bg} text-white`,
            onClick: () => console.log("Request Sent"),
        },
        r(MDBIcon, { size: "lg", icon, fas: true })
    );
}
export default FriendRequest;

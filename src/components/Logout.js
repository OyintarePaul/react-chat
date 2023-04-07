import { createElement as r, useState } from "https://cdn.skypack.dev/react";
import {
    MDBIcon,
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from "https://cdn.skypack.dev/mdb-react-ui-kit";
import { useNavigate } from "https://cdn.skypack.dev/react-router-dom";

import { logOut } from "../server/users.js";

import IconButton from "./IconButton.js";

function Logout(props) {
    const [confirmLogout, setConfirmLogout] = useState(false);
    const toggleModal = () => setConfirmLogout(!confirmLogout);
    const navigate = useNavigate();

    const logUserOut = async () => {
        await logOut();
        navigate("/login", { replace: true });
    };
    return r(
        IconButton,
        {
            onClick: toggleModal,
        },
        r(MDBIcon, {
            fas: true,
            icon: "sign-out-alt",
            iconType: "solid",
        }),
        r(
            MDBModal,
            {
                show: confirmLogout,
                setShow: setConfirmLogout,
                tabIndex: "-1",
            },
            r(
                MDBModalDialog,
                { centered: true },
                r(
                    MDBModalContent,
                    null,
                    r(
                        MDBModalHeader,
                        null,
                        r(MDBModalTitle, null, "Log out"),
                        r(MDBBtn, {
                            className: "btn-close",
                            color: "none",
                            onClick: toggleModal,
                        })
                    ),
                    r(MDBModalBody, null, "Are you sure you want to log out?"),
                    r(
                        MDBModalFooter,
                        null,
                        r(
                            MDBBtn,
                            { color: "secondary", onClick: toggleModal },
                            "No"
                        ),
                        r(
                            MDBBtn,
                            { color: "danger", onClick: logUserOut },
                            "Yes"
                        )
                    )
                )
            )
        )
    );
}

export default Logout;
/*<MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>*/

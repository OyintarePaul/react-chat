import { createElement as r, useState } from "https://cdn.skypack.dev/react";
import { useNavigate } from "https://cdn.skypack.dev/react-router-dom";

import { logOut } from "../server/users.js";

import IconButton from "./IconButton.js";

function Logout(props) {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow((prev) => !prev);
  const navigate = useNavigate();

  const logUserOut = async () => {
    await logOut();
    navigate("/login", { replace: true });
  };
  return r(
    IconButton,
    {
      size: "25px",
    },
    r("img", {
      src: "/public/icons/logout.svg",
      width: "16px",
      height: "16px",
      onClick: logUserOut,
    })
  );
}

export default Logout;
// <div class="modal" tabindex="-1">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title">Modal title</h5>
//         <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         <p>Modal body text goes here.</p>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>

import { createElement as r } from "https://cdn.skypack.dev/react";
import { Link } from "https://cdn.skypack.dev/react-router-dom";
// import FriendRequest from "./FriendRequest.js";

function UserAvatar({ avatar }) {
  return r("img", {
    className: "rounded-circle me-3",
    src: avatar,
    alt: "",
    style: { width: "45px", height: "45px" },
  });
}

function FriendListItem({ name, email, avatar, id }) {
  return r(
    Link,
    {
      className: "d-block mb-4",
      to: "/chat",
      state: { user: { name, email, avatar, id } },
    },
    r(
      "div",
      {
        className: "d-flex justify-content-between",
      },
      r(
        "div",
        { className: "d-flex" },
        r(UserAvatar, { avatar }),
        r(
          "div",
          null,
          r(
            "p",
            {
              className: "fw-bold mb-1 text-black",
            },
            name
          ),
          r("p", { className: "text-muted mb-0" }, "Hi, wanna chat?")
        )
      )
    )
  );
}

function FriendsList({ list }) {
  return r(
    "ul",
    { className: "mt-3 mb-5 border-0 list-unstyled position-relative" },
    list.map(
      (item, index) =>
        r(
          "li",
          { key: index, className: "px-3" },
          r(FriendListItem, {
            name: item.name,
            email: item.email,
            avatar: "/public/images/default-avatar.png",
            id: item.id,
          })
        )
      //     list.map((item, index) => {
      //       return r(
      //         MDBListGroupItem,
      //         {
      //           key: index,
      //           className: "border-0 px-3",
      //         },
      //         r(FriendListItem, {
      //           name: item.name,
      //           email: item.email,
      //           avatar: "/public/images/default-avatar.png",
      //           id: item.id,
      //         })
      //       );
      //     })
    )
  );
}
export default FriendsList;

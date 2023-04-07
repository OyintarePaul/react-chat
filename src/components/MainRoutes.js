import React, { createElement as r } from "https://cdn.skypack.dev/react";
import { createBrowserRouter } from "https://cdn.skypack.dev/react-router-dom";

import CoverScreen from "../pages/CoverScreen.js";
// import Chats from "../pages/Chats.js";
import Chat from "../pages/Chat.js";
import FindFriends from "../pages/FindFriends.js";
import Groups from "../pages/Groups.js";
import Signup from "../pages/Signup.js";
import Login from "../pages/Login.js";
const router = createBrowserRouter([
    // { path: "/chats", element: r(Chats) },
    { path: "/chat", element: r(Chat) },
    { path: "/find-friends", element: r(FindFriends) },
    { path: "/signup", element: r(Signup) },
    { path: "/login", element: r(Login) },
    { path: "/index.html", element: r(CoverScreen) },
    { path: "/", element: r(CoverScreen) },
]);

export default router;

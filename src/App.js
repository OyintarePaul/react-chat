import React, {
    createElement as r,
    useEffect,
    createContext,
} from "https://cdn.skypack.dev/react";
import { RouterProvider } from "https://cdn.skypack.dev/react-router-dom";

import router from "./components/MainRoutes.js";
import AuthProvider from "./contexts/authContext.js";
function App(props) {
    return r(AuthProvider, null, r(RouterProvider, { router }));
}

export default App;

import {
  createElement as r,
  createContext,
  useContext,
  useState,
  useEffect,
} from "https://cdn.skypack.dev/react";

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { auth } from "../server/firebase.js";

const authContext = createContext();

function useAuth() {
  return useContext(authContext);
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(auth);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return setUser(user.auth);
    }
    setUser(null);
  });

  return r(authContext.Provider, { value: user }, children);
}
export { useAuth };
export default AuthProvider;

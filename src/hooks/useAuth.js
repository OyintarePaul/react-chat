import {
    useState
} from "https://cdn.skypack.dev/react";
import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import {
    auth
} from "../server/firebase.js";
function useAuth() {
    const [user,
        setUser] = useState(auth);
    onAuthStateChanged(auth, (user) => {
        setUser(user.auth);
    });
    return user;
}

export default useAuth;
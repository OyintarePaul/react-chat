import {
    createElement as r,
    createContext,
    useContext,
    useState,
    useEffect,
} from "https://cdn.skypack.dev/react";

const userContext = createContext();

function useUser() {
    return useContext(userContext);
}

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    return r(userContext.Provider, { value: { user, setUser } }, children);
}


export { useUser };
export default UserProvider;

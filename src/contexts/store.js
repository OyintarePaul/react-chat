import {
    createElement as r,
    createContext,
    useContext,
    useState,
    useEffect,
} from "https://cdn.skypack.dev/react";

const user = createContext();

function useUser() {
    return useContext(store);
}

function StoreProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    return r(
        store.Provider,
        { value: { currentUser, setCurrentUser } },
        children
    );
}

export default StoreProvider;

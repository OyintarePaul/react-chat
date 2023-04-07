import { useState, useEffect } from "https://cdn.skypack.dev/react";
import {
    getDocs,
    collection,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

import { db } from "../server/firebase.js";

function useUsers(userId) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        (async () => {
            setUsers(await getUsers());
        })();
    }, []);
    return users;
}

const getUsers = async (userId) => {
    try {
        const snapshot = await getDocs(collection(db, "users"));
        const data = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return data;
    } catch (e) {
        console.log(e);
        return [];
    }
};

export default useUsers;

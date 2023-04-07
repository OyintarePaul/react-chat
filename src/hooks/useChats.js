import {
    collection,
    query,
    getDocs,
    where,
    orderBy,
    onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

import { useState, useEffect } from "https://cdn.skypack.dev/react";

import { db } from "../server/firebase.js";
function useChats(senderId, receiverId) {
    const [chats, setChats] = useState([]);
    useEffect(() => {
        (async () => {
            const c = await getChats(senderId, receiverId);
            setChats(c);
        })();
    }, []);
    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            where(
                "participants",
                "array-contains",
                `${senderId}-${receiverId}`
            ),
            orderBy("time")
        );
        const unsub = onSnapshot(q, (snapshot) => {
            const chats = snapshot.docs.map((doc) => {
                return doc.data();
            });
            setChats(chats);
        });
        return () => unsub();
    }, []);
    return chats;
}

async function getChats(senderId, receiverId) {
    const q = query(
        collection(db, "messages"),
        where("participants", "array-contains", `${senderId}-${receiverId}`),
        orderBy("time")
    );
    try {
        const snapshot = await getDocs(q);
        const chats = snapshot.docs.map((doc) => {
            return doc.data();
        });
        return chats;
    } catch (e) {
        console.log(e);
    }
}

export default useChats;

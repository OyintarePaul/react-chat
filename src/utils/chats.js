import {
    collection,
    addDoc,
    serverTimestamp,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
import { db } from "../server/firebase.js";
async function addMessageToFirestore(message) {
    const messagesRef = collection(db, "messages");
    try {
        const docRef = await addDoc(messagesRef, {
            ...message,
            time: serverTimestamp(),
        });
        return docRef.id;
    } catch (e) {
        console.log(e);
    }
}
export { addMessageToFirestore };

/* {
    body: "Message",
    senderId: "id",
    receiverId: "id"
    messageId: "senderId/receiverId"
}*/

import { auth, db } from "./firebase.js";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import {
    collection,
    addDoc,
    query,
    getDocs,
    getDoc,
    where,
    updateDoc,
    arrayUnion,
    doc,
    setDoc,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

async function localSignup(name, email, password) {
    try {
        const userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const { uid } = userCredentials.user;
        const id = await createNewUser(uid, { name, email });
        saveLoginDetails({ email, password });
        return { id, email, name };
    } catch (e) {
        console.log(e);
    }
}

async function logOut() {
    try {
        await signOut(auth);
        localStorage.removeItem("userDetails");
        return true;
    } catch (e) {
        return false;
    }
}

async function localSignin(email, password) {
    try {
        const userCredentials = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const { uid } = userCredentials.user;
        const user = await getUserWithId(uid);
        saveLoginDetails({ email, password });
        return user;
    } catch (e) {
        console.log(e);
    }
}

function saveLoginDetails(details) {
    const str = JSON.stringify(details);
    localStorage.setItem("userDetails", str);
    return true;
}

function getLoginDetails() {
    const str = localStorage.getItem("userDetails");
    if (str) {
        const details = JSON.parse(str);
        return details;
    }
    return null;
}

async function createNewUser(id, user) {
    try {
        const docRef = doc(db, "users", id);
        await setDoc(docRef, user);
        return id;
    } catch (e) {
        console.log(e);
    }
}

async function sendFriendRequest(userId, friendId) {
    const userUpdate = { requestSent: arrayUnion(friendId) };
    const friendUpdate = { requestReceived: arrayUnion(userId) };
    try {
        const user = await updateDoc(doc(db, "users", userId), userUpdate);
        const friend = await updateDoc(
            doc(db, "users", friendId),
            friendUpdate
        );
        return true;
    } catch (e) {
        return console.log(e);
    }
    // console.log(userId, friendId);
}

async function getUserWithId(id) {
    const user = await getDoc(doc(db, "users", id));
    return { id: user.id, ...user.data() };
}

export {
    localSignup,
    localSignin,
    createNewUser,
    sendFriendRequest,
    getLoginDetails,
    logOut,
};
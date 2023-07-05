import {
  createElement as r,
  useState,
  useEffect,
} from "https://cdn.skypack.dev/react";

import { useAuth } from "../contexts/authContext.js";
// import TextField from "../components/TextField.js";
// // import BottomTabBar from "../components/BottomTabBar.js";
// import IconButton from "../components/IconButton.js";
import FriendsList from "../components/FriendsList.js";
import useUsers from "../hooks/useUsers.js";
// import Header from "../components/Header.js";
import AppBar from "../components/AppBar.js";
import SearchFriends from "../components/SearchFriends.js";

function FindFriendsHeader() {
  return r(AppBar, { heading: "Chat" });
}

function FindFriends(props) {
  const users = useUsers();
  const auth = useAuth();
  const [otherUsers, setOtherUsers] = useState([]);
  const [renderedUsers, setRenderedUsers] = useState(otherUsers);
  useEffect(() => {
    if (users.length > 0 && auth.currentUser != null) {
      const friends = users.filter((item) => {
        return item.id != auth.currentUser.uid;
      });
      setOtherUsers(friends);
      setRenderedUsers(friends);
    }
  }, [users]);
  return r(
    "div",
    null,
    r(FindFriendsHeader),
    r(SearchFriends, { otherUsers, setRenderedUsers }),
    r(FriendsList, { list: renderedUsers })
    //   );
  );
}

export default FindFriends;

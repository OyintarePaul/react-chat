import {
  createElement as r,
  useState,
  useEffect,
} from "https://cdn.skypack.dev/react";

import TextField from "../components/TextField.js";

function SearchFriends({ otherUsers, setRenderedUsers }) {
  const [value, setValue] = useState("");
  const byName = (item, index) => {
    return item.name.toUpperCase().search(value.toUpperCase()) != -1;
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    if (value != "") {
      const filtered = otherUsers.filter(byName);
      setRenderedUsers(filtered);
    } else {
      setRenderedUsers(otherUsers);
    }
  }, [value]);
  return r(
    "div",
    { className: "container" },
    r(TextField, {
      placeholder: "Type a friend's name...",
      startIcon: r("img", {
        src: "/public/icons/search-icon.svg",
        width: "18px",
        height: "18px"
      }),
      value,
      onChange: handleChange,
    })
  );
}

export default SearchFriends;

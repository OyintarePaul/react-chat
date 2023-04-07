import {
    createElement as r,
    useState,
    useEffect,
} from "https://cdn.skypack.dev/react";
import {
    MDBContainer,
    MDBIcon,
} from "https://cdn.skypack.dev/mdb-react-ui-kit";

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
        MDBContainer,
        null,
        r(TextField, {
            placeholder: "Search friends...",
            startIcon: r(MDBIcon, { fas: true, icon: "search" }),
            value,
            onChange: handleChange,
        })
    );
}

export default SearchFriends;

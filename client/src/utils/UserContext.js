import React from "react";
// default context object with properties corresponding to Provider values

const UserContext = React.createContext({
    id: 0,
    username: "welcome",
    password: "password",
});

export default UserContext;
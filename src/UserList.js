import React from "react";
import { useState } from "react";

const axios = require("axios");

export const UserList = () => {
  const [userList, setUserList] = useState([]);
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      setUserList(response.data);
    });

  return (
    <div>
      {userList.map((el) => (
        <div style={{border:"black 3px solid", width:"50%",margin:"0 auto",backgroundColor:"pink"}}>
          <div>{el.name}</div>
          <div>{el.adress}</div>
          <div>{el.email}</div>
          <div>{el.phone}</div>
        </div>
      ))}
    </div>
  );
};
export default UserList;

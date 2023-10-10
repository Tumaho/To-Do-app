import React from "react";
import "./header.css";
import cookie from "react-cookies";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const user = cookie.load("user");
  
  const handleLogout = () => {
    cookie.remove("user");
    cookie.remove("pass");
    navigate(`/`);
  };

  return (
    <div className="header">
      <h1 className="logoTitle">Todo Project</h1>
      <div className="userContainerHeader">
        <div className="d-flex">
          <p className="userNameFont">Welcome {user.selectedUser.username}</p>
          <img src={user.selectedUser.avatar} alt="avatar" width={40} height={40} />
        </div>
        <Button
          variant="outline-warning"
          className="logout"
          onClick={() => handleLogout()}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

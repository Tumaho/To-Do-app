import { useEffect, useState } from "react";
import { getAllUsers } from "../../api/api";
import UsersList from "../../components/usersList/usersList";
import Form from "react-bootstrap/Form";
import "./login.css";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import cookie from 'react-cookies'
import { useNavigate } from "react-router-dom";

const userData = [
  {
    username: "zucker",
    password: "123456",
  },
  {
    username: "felon",
    password: "123123",
  },
  {
    username: "robon",
    password: "secret",
  },
];
export default function Login() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [password, setPassword] = useState("");
  const [isWrong, setIsWrong] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  const handleLogin = () => {
    const filtered = userData.filter((user) => {
      return user.username === selectedUser.username;
    });

    if (filtered[0].password === password) {
      setIsWrong(false);
      cookie.save('user', {selectedUser}, { expires: new Date(Date.now() + 86400000) });
      cookie.save('pass', {filtered}, { expires: new Date(Date.now() + 86400000) });
      navigate(`/dashboard`);
      navigate(0);
    } else setIsWrong(true);
  };



  return (
    <div className="body">
      <div className="container">
        <div className="form-box">
          <UsersList users={users} setSelectedUser={setSelectedUser} />
          {selectedUser && (
            <div className="passwordDiv">
              <Form.Label column>
                Password for {selectedUser.username}
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <span className="notCorrect">{isWrong ? 'Password is not correct' : ''}</span>
              </Col>
              <Button
                variant="warning"
                className="loginButton"
                onClick={() => handleLogin()}
              >
                Login
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

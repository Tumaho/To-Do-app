import Button from "react-bootstrap/Button";
import './userList.css'

function UsersList({ users, setSelectedUser }) {
  
  return (
    <div className="buttonsContainer">
      {users.map((user) => (
        <Button variant="outline-warning" key={user.name} className="button" onClick={() => {setSelectedUser(user);}}>
          <div className="userContainer">
            <img src={user.avatar} alt="avatar" width={50} height={50}/>
            <div>
              <p>{user.name}</p>
              <p>{user.username}</p>
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
}

export default UsersList;

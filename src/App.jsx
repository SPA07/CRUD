import UsersList from "../components/UsersList";
import Usersform from "../components/UsersForm";
import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  // console.log(users);

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  
  const editUser = (user) => {
    setUserSelected(user);
  };
  
  const deselectUser = () => setUserSelected(null)
  

  return (
    <div className={"main-container"}>
      <Usersform getUsers={getUsers} 
      userSelected={userSelected} 
      deselectUser={deselectUser} 
      />
      <UsersList 
      users={users} 
      editUser={editUser} 
      getUsers={getUsers}
      />
    </div>
  );
}

export default App;

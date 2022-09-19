import axios from 'axios'
import React from 'react'

function UsersList({ users, editUser, getUsers }) {

  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(() => getUsers())
  } 

  return (
    <div className={"users-list-container"}>
      <ul className="users-list">
        {users.map((user) => (
          <li key={user.id}>
            <div className="user-card">
              <div className="names">
                <h3>{user.first_name}, {user.last_name}</h3>
              </div>
              <div>
                {user.email}
              </div>
              <div>
                {user.birthday}
              </div>
              <div className="btns-container">
                <div  onClick={() => editUser(user)} className="edit-container">
                  <i className="fa-regular fa-pen-to-square"></i>
                </div>
                <div onClick={() => deleteUser(user.id)} className="delete-container">
                  <i className="fa-sharp fa-solid fa-trash"></i>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersList

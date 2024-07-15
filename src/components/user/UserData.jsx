import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserData() {
  const URL = "http://localhost:5000/users";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  console.log('users', users)

  const loadUsers = async ()=>{
      const result = await axios.get("http://localhost:5000/users");
      // console.log('result', result)
      setUsers(result.data.reverse());
  }

  return (
    <>
      <div className="section user-form">
        <div className="container">
          <h2 className="mb-3">Add User</h2>
          <table className="table border">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index }>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to="#" className="btn btn-primary me-2">
                      View
                    </Link>
                    <Link  to="#" className="btn btn-secondary me-2">
                      Edit
                    </Link>
                    <Link to="#" className="btn btn-danger me-2">
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserData;

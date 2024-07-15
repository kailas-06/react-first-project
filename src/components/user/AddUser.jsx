import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const navigate = useNavigate();
    const [user,setUser] = useState({
        name: "",
        username: "",
        email: ""
    });
    const {name,username,email} = user;
    const onInputChange = e =>{
        setUser({...user,[e.target.name]: e.target.value})
        // console.log(e.target.value)
    }

    const onSubmit = async (e) =>{
      e.preventDefault();
      await axios.post("http://localhost:5000/users",user)
      navigate('/user');
    }

  return (
    <>
    <div className="section user-form">
        <div className="container">
            <h2 className='mb-3'>Add a User</h2>
        <form onSubmit={e =>onSubmit(e)}>
          <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                className="form-control"
                id="user-name"
                placeholder="User name"
                name="username"
                value={username}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-50">
              Submit
            </button>
          </form>
        </div>
    </div>

    </>
  )
}

export default AddUser

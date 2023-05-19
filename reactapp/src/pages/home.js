import React, { useEffect, useState } from 'react';
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  }

  return (
    <div className='container'>
      <div className='py-4'>
        <table className="table table-bordered shadow gradient">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email ID</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.emailID}</td>
                <td>
                    <button className='btn btn-primary mx-2 '>View</button>
                    <button className='btn btn-outline-primary mx-2'>Edit</button>
                    <button className='btn btn-danger mx-2'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react'
import AdminNavbar from '../layout/AdminNavbar'
import axios from 'axios'
import { api } from '../APIConnect'
import { toast } from 'react-toastify'


function DisplayAllUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fatchUsers();
    }, [])

    const fatchUsers = async () => {
        const response = await axios.get(`${api}user`)
        const sortedArray = response.data.sort((a, b) => {
            return a.id - b.id;
          });
      
        setUsers(sortedArray)
    }

    const handleChangeRole= async(item)=>{
        if(item.role=="USER"){
            item.role='ADMIN'
        }
        else{
            item.role='USER'
        }
        const response= await axios.put(`${api}user`,item)
        console.log(response)
        setUsers((prevUser) =>
                prevUser.map((us) =>
                    us.id === item.id
                        ? {
                            id: item.id,
                            email: item.email,
                            name: item.name,
                            age: item.age,
                            gender: item.gender,
                            height: item.height,
                            weigth: item.weight,
                            password:item.password,
                            role: item.role,
                            goals:item.goals
                        }
                        : us
                )
            ); 
            toast.info("Role Successfully Changed");
    }

    const deleteUserById=async(id)=>{
        await axios.delete(`${api}user/${id}`)
        setUsers(users.filter((item) => item.id !== id));
        toast.success("User Deleted..")
    }

    return (
        <>
            <AdminNavbar />
            <div className='container'>
                <div>
                <div style={{textAlign:'center', fontSize:"20px",fontWeight:'bold', padding:'15px'}}>Registered Users</div>
                    <table className="table table-hover" >
                        <thead className="table-light" >
                            <tr>
                                <th scope="col">User Id</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Gmail</th>
                                <th scope="col">Age</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Role</th>
                                <th scope="col">Perform Actions</th>
                            </tr>
                        </thead>
                        <tbody id="exercisetable">
                            {users.map((item) => (
                                <tr>
                                    <td scope="col" >{item.id}</td>
                                    <td scope="col" >{item.name}</td>
                                    <td scope="col" >{item.email}</td>
                                    <td scope="col" >{item.age}</td>
                                    <td scope="col" >{item.gender}</td>
                                    <td scope="col" >{item.role}</td>
                                    <td scope="col" >
                                        <button type="button" class="btn btn-info" onClick={()=> handleChangeRole(item)}>Change Role</button>
                                        &nbsp;
                                        <button type="button" className="btn btn-danger" onClick={()=> deleteUserById(item.id)}  >Delete</button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default DisplayAllUsers

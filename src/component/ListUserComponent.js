import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';

const ListUserComponent = () => {

  const [users, setUsers] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => { 
    getAllUsers();
}, [])

  const getAllUsers = () => {
    UserService.getAllUsers().then((response) => {
        setUsers(response.data)
        console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
  }

  const deleteUser = (userId) => {
    UserService.deleteUser(userId).then((response) =>{
     getAllUsers();

    }).catch(error =>{
        console.log(error);
    })
  }

  const searchUsers = (keyword) => {
    // console.log(keyword);
    UserService.searchUsers(keyword).then((response) =>{
      setUsers(response.data)
      console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
  }

  return (
    <div className = "container">
      <h2 className = "text-center"> List Users </h2>
      <Link to = "/add-user" className = "btn btn-primary mb-2" > Add User </Link>
      <div className = "form-group mb-2">
        {/* <label className = "form-label"> Search :</label> */}
        <input
            type = "text"
            placeholder = "Search:"
            name = "text"
            className = "form-control"
            value = {searchText}
            onChange = {(e) => setSearchText(e.target.value)}
        >
        </input>
      </div>
      <button className = "btn btn-primary" onClick = {(e) => searchUsers(searchText)} >Search </button>
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                <th> User Id </th>
                <th> User Name </th>
                <th> User Email</th>
                <th> Actions </th>
                </tr>
            </thead>
            <tbody>
                    {
                        users.map(
                            user =>
                            <tr key = {user.id}> 
                                <td> {user.id} </td>
                                <td> {user.username} </td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-user/${user.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteUser(user.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
        </table>
    </div>
  )
}

export default ListUserComponent
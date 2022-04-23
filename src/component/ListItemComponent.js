import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import ItemService from '../services/ItemService';

const ListItemComponent = () => {

  const [items, setItems] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => { 
    getAllItems();
}, [])

  const getAllItems = () => {
    ItemService.getAllItems().then((response) => {
        setItems(response.data)
        console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
  }

  const deleteItem = (itemId) => {
    ItemService.deleteItem(itemId).then((response) =>{
     getAllItems();

    }).catch(error =>{
        console.log(error);
    })
  }

  const searchItems = (keyword) => {
    // console.log(keyword);
    ItemService.searchItems(keyword).then((response) =>{
      setItems(response.data)
      console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
  }

  return (
    <div className = "container">
      <h2 className = "text-center"> List Items </h2>
      <Link to = "/add-item" className = "btn btn-primary mb-2" > Add Item </Link>
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
      <button className = "btn btn-primary" onClick = {(e) => searchItems(searchText)} >Search </button>
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                <th> Name </th>
                <th> Brands </th>
                <th> Region</th>
                <th> Current Price</th>
                <th> Actions </th>
                </tr>
            </thead>
            <tbody>
                    {
                        items.map(
                            item =>
                            <tr key = {item.id}> 
                                <td> {item.name} </td>
                                <td> {item.brands} </td>
                                <td>{item.region}</td>
                                <td>{item.currentPrice}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-item/${item.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteItem(item.id)}
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

export default ListItemComponent
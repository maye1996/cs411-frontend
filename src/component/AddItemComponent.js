import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import ItemService from '../services/ItemService'

const AddItemComponent = () => {

    const [name, setName] = useState('')
    const [brands, setBrands] = useState('')
    const [description, setDescription] = useState('')
    const [region, setRegion] = useState('')
    const [originPrice, setOriginPrice] = useState(0)
    const [currentPrice, setCurrentPrice] = useState(0)
    const history = useHistory();
    const {id} = useParams();

    const saveOrUpdateItem = (e) => {
        e.preventDefault();

        const item = {id, name, brands, description, region, originPrice, currentPrice}
        console.log(item);

        if(id){
            ItemService.updateItem(id, item).then((response) => {
                history.push('/listallitems')
            }).catch(error => {
                console.log(error)
            })

        }else{
            ItemService.createItem(item).then((response) =>{

                console.log(response.data)
    
                history.push('/listallitems');
    
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {

        ItemService.getItemById(id).then((response) =>{
            setName(response.data.name)
            setBrands(response.data.brands)
            setDescription(response.data.description)
            setRegion(response.data.region)
            setOriginPrice(parseInt(response.data.originPrice))
            setCurrentPrice(parseInt(response.data.currentPrice))
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Item</h2>
        }else{
            return <h2 className = "text-center">Add Item</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Item Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter item name"
                                        name = "name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Brands :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter brands"
                                        name = "brands"
                                        className = "form-control"
                                        value = {brands}
                                        onChange = {(e) => setBrands(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Description :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter description"
                                        name = "description"
                                        className = "form-control"
                                        value = {description}
                                        onChange = {(e) => setDescription(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Region :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Region"
                                        name = "region"
                                        className = "form-control"
                                        value = {region}
                                        onChange = {(e) => setRegion(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Origin Price :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter origin price"
                                        name = "originPrice"
                                        className = "form-control"
                                        value = {originPrice}
                                        onChange = {(e) => setOriginPrice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Current Price :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter current price"
                                        name = "currentPrice"
                                        className = "form-control"
                                        value = {currentPrice}
                                        onChange = {(e) => setCurrentPrice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateItem(e)} >Submit </button>
                                <Link to="/listallitems" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddItemComponent
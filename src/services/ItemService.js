import axios from 'axios';

const ITEM_BASE_REST_API_URL = "http://localhost:8080/api/v1/item"

class ItemService{
    getAllItems(){
        return axios.get(ITEM_BASE_REST_API_URL + '/all')
    }

    createItem(item){
        return axios.post(ITEM_BASE_REST_API_URL + '/insertOne', item)
    }

    getItemById(itemId){
        return axios.get(ITEM_BASE_REST_API_URL + '/getById?id=' + itemId);
    }

    updateItem(itemId, item){
        return axios.post(ITEM_BASE_REST_API_URL + '/updateById', item);
    }

    deleteItem(itemId){
        return axios.get(ITEM_BASE_REST_API_URL + '/deleteById?id=' + itemId);
    }

    searchItems(keyword){
        return axios.get(ITEM_BASE_REST_API_URL + '/getByName?name=' + keyword);
    }
}

export default new ItemService();
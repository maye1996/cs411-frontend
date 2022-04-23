import axios from 'axios';

const USER_BASE_REST_API_URL = "http://localhost:8080/api/v1/user"
const ORDER_BASE_REST_API_URL = "http://localhost:8080/api/v1/orders"

class AdvancedService{
    getUserLiked(){
        return axios.get(USER_BASE_REST_API_URL + '/userLiked')
    }

    getTexasTop(){
        return axios.get(ORDER_BASE_REST_API_URL + '/texastop')
    }
}

export default new AdvancedService();
import axios from 'axios';

const USER_BASE_REST_API_URL = "http://localhost:8080/api/v1/user"

class UserService{
    getAllUsers(){
        return axios.get(USER_BASE_REST_API_URL + '/all')
    }

    createUser(user){
        return axios.post(USER_BASE_REST_API_URL + '/insertOne', user)
    }

    getUserById(userId){
        return axios.get(USER_BASE_REST_API_URL + '/getById?id=' + userId);
    }

    updateUser(userId, user){
        return axios.post(USER_BASE_REST_API_URL + '/updateById', user);
    }

    deleteUser(userId){
        return axios.get(USER_BASE_REST_API_URL + '/deleteById?id=' + userId);
    }

    searchUsers(keyword){
        return axios.get(USER_BASE_REST_API_URL + '/getByName?name=' + keyword);
    }
}

export default new UserService();
import axios from 'axios';
import { getToken } from './AuthService';

const BASE_REST_API_URL = 'http://localhost:8080/api/todos';


// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['Authorization'] = getToken();
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });




export function getAllTodo(){
    return axios.get(BASE_REST_API_URL);
}

export function addTodo(todo){
    return axios.post(BASE_REST_API_URL, todo);
}


export function updateTodoById(id, updatedTodo)
{
    return axios.put(BASE_REST_API_URL+"/"+id, updatedTodo);
}


export function getTodoById(id){
    return axios.get(BASE_REST_API_URL+"/"+id);
}

export function deleteById(id)
{
    return axios.delete(BASE_REST_API_URL+"/"+id);
}

export function completeTodo(id){
    return axios.patch(BASE_REST_API_URL+"/"+id+"/complete");
}

export function incompleteTodo(id){
    return axios.patch(BASE_REST_API_URL+"/"+id+"/in-complete");
}
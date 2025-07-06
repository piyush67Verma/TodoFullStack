import axios from "axios";


const   AUTH_REST_API_BASE_URL = "http://localhost:8080/api/auth";

export function registerAPICall(registerObj){
    return axios.post(AUTH_REST_API_BASE_URL+"/register", registerObj);
}

export function loginAPICall(loginObj){
    return axios.post(AUTH_REST_API_BASE_URL+'/login', loginObj);
}

export function storeToken(token){
    localStorage.setItem('token', token);
}

export function getToken(){

    return localStorage.getItem('token');
}

export function saveLoggedInUser(username, role){
    sessionStorage.setItem("authenticatedUser", username);
    sessionStorage.setItem("role", role);
}

export function isUserLoggedIn(){
    const username = sessionStorage.getItem("authenticatedUser");

    if(username==null)
    {
        return false;
    }
    else{
        return true;
    }
}

export function getLoggedInUser(){

    const username = sessionStorage.getItem("authenticatedUser");
    return username;
}


export function logout(){
    localStorage.clear();
    sessionStorage.clear();
}

export  function isAdminUser(){
    let role = sessionStorage.getItem("role");
    if(role!=null && role==="ROLE_ADMIN"){
        return true;
    }
    return false;
}
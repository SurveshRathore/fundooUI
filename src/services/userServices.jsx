import axios from 'axios';

export const loginApi = (loginObj) => {
    //let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login", loginObj)
     let response = axios.post("https://localhost:7102/api/controller/api/Login", loginObj)
    return response
}

export const SignUpApi = (SignUpObj) => {
    let response = axios.post("https://localhost:7102/api/controller/api/Register", SignUpObj)
    return response
}

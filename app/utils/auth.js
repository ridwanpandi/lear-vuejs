import Router from 'vue-router'
import axios from 'axios'


export function logout(){
    localStorage.removeItem('user-token');
}

export function login(email, password) {
    axios.post('http://localhost:8000/api/login', {
        email: email,
        password: password
    }).
    then(res => {
        let token = res.data.token
        localStorage.setItem('user-token', token)
    }).
    catch(err => {
        localStorage.removeItem('user-token')
        return false;
    });

    return true;
}
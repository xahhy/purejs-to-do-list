import Cookies from 'js-cookie';
import Login from '../data/Login';

export const fetchAllTodos = (callback) => {
    const token = Cookies.get('token');
    return fetch('/todos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then(
        response => {
            return response.json();
        }
    ).then(
        response => {
            console.log(response);
            callback(response.content)
        }
    ).catch(reason => console.log(reason))
};

export const loginUseJWT = (username, password, callback) => {
    return fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: username,
            password
        })
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            debugger;
            let error = new Error(response.statusText || response.status);
            error.response = response;
            return Promise.reject(error)
        }
    }).then(response => response.text())
        .then(response => {
            debugger;
            Cookies.set('token', response);
            const login = new Login(username);
            login.isLogin = true;
            login.token = response;
            callback && callback(login);
        }).catch(reason => console.log(reason))
};
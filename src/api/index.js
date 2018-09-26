import Cookies from 'js-cookie';
import Login from '../data/Login';

const proxyUrl = 'http://'+window.location.hostname;
/* Util functions*/
const headers = (token) => {
    return {
        'Content-Type': 'application/json',
        'Authorization': token
    }
};

const responseDispatcher = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        let error = new Error(response.statusText || response.status);
        error.response = response;
        return Promise.reject(error)
    }
};

/* Todo's API */
export const fetchAllTodosAPI = (params, token) => {
    const url = new URL('/api/todos', proxyUrl);
    params && Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    return fetch(url.pathname + url.search, {
        method: 'GET',
        headers: headers(token)
    }).then(responseDispatcher).then(
        response => {
            return response.json();
        }
    ).catch(reason => console.log(reason))
};

export const loginUseJWTAPI = (username, password) => {
    return fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    }).then(responseDispatcher).then(response => response.text())
        .then(response => {
            Cookies.set('token', response);
            const login = new Login(username);
            login.isLogin = true;
            login.token = response;
            return login;
        }).catch(reason => alert(reason))
};

export const deleteTodoAPI = (id, token) => {
    return fetch(`/api/todos/${id}`, {
        method: 'DELETE',
        headers: headers(token)
    }).then(responseDispatcher)
        .catch(reason => alert(reason))
};

export const addTodoAPI = (todo, token) => {
    return fetch('/api/todos', {
        method: 'POST',
        headers: headers(token),
        body: JSON.stringify(todo)
    }).then(responseDispatcher).catch(reason => alert(reason));
};

export const updateTodoAPI = (todo, token) => {
    return fetch(`/api/todos/${todo.id}`, {
        method: 'PUT',
        headers: headers(token),
        body: JSON.stringify(todo)
    }).then(responseDispatcher).catch(reason => alert(reason))
};

/* Tags API */
export const fetchAllTagsAPI = (token) => {
    return fetch('/api/tags', {
        method: 'GET',
        headers: headers(token)
    }).then(responseDispatcher).then(response => response.json())
        .catch(reason => alert(reason));
};
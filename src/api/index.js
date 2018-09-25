import Cookies from 'js-cookie';
import Login from '../data/Login';

/* Util functions*/
const headers = () => {
    return {
        'Content-Type': 'application/json',
        'Authorization': Cookies.get('token')
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
export const fetchAllTodosAPI = params => {
    const token = Cookies.get('token');
    const url = new URL('http://localhost/todos');
    params && Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    return fetch(url.pathname + url.search, {
        method: 'GET',
        headers: headers()
    }).then(responseDispatcher).then(
        response => {
            return response.json();
        }
    ).catch(reason => console.log(reason))
};

export const loginUseJWTAPI = (username, password) => {
    return fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: username,
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

export const deleteTodoAPI = id => {
    return fetch(`/todos/${id}`, {
        method: 'DELETE',
        headers: headers()
    }).then(responseDispatcher)
        .catch(reason => alert(reason))
};

export const addTodoAPI = todo => {
    return fetch('/todos', {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(todo)
    }).then(responseDispatcher).catch(reason => alert(reason));
};

export const updateTodoAPI = todo => {
    return fetch(`/todos/${todo.id}`, {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify(todo)
    }).then(responseDispatcher).catch(reason => alert(reason))
};

/* Tags API */
export const fetchAllTagsAPI = () => {
    return fetch('/tags', {
        method: 'GET',
        headers: headers()
    }).then(responseDispatcher).then(response => response.json())
        .catch(reason => alert(reason));
};
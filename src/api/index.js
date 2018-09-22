export const fetchAllTodos = (callBack)=>{
    return fetch('/todos',{
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        response => {
            return response.json();
        }
    ).then(
        response => {
            console.log(response);
            callBack(response.content)
        }
    );
};
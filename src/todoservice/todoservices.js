const TODO_ENDPOINT = "https://crudcrud.com/api/3e15eeb86a734a979edbb4613f11b5e0/todos";

const getFetchOptions = (method, data) => ({
    method : method,
    headers : {"Content-Type": "application/json"},
    body : JSON.stringify(data)
})

export const getTodos = async() => {
    try{
        const res = await fetch(TODO_ENDPOINT);
        return await res.json();
    }
    catch (e) {
        console.log(e);
        return null;
    }
}

export const createTodo = async(todo) => {
    try{
        const res = await fetch(TODO_ENDPOINT, getFetchOptions("POST", todo));
        return await res.json();
         
    }
    catch (e) {
        console.log(e);
        return null;
    }
}

export const updateTodo = async(todo) => {
    try{
        const res = await fetch(TODO_ENDPOINT + "/" + todo._id, getFetchOptions("PUT", { text: todo.text}));  
        return res;
    }
    catch (e) {
        console.log(e);
        return null;
    }
}

export const deleteTodo = async(todo) => {
    try{
        const res = await fetch(TODO_ENDPOINT + "/" + todo._id, {method: "DELETE"});
        return res;
    }
    catch (e) {
        console.log(e);
        return null;
    }
}
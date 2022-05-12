import React, {useState, useEffect} from 'react'
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import { getTodos, createTodo, updateTodo, deleteTodo} from "./todoservice/todoservices";
let tempID;

function App() {

  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null); 
  const [isTodoFormModalOpen, setIsTodoFormModalOpen] = useState(false); //check whether modal is open


  //loading in todos in the beginning
  const refreshTodos = async() => {
    const freshTodos = await getTodos(); //need to put in the state
    setTodos((freshTodos) ? freshTodos : []); //returns empty array if freshtodo is false
  }
  
  useEffect(() => {
    refreshTodos();
  }, [])  
  //only run it the first time the page loads (first render/mount) 


  //delete
  const handleDelete = async (todo) => {
    await deleteTodo(todo);  
    refreshTodos();
  }

  
  //Edit
  const handleEditStart = (todo) => {
    if(todo === null) {
      tempID = Math.random();
    }
    setEditTodo(todo);
    setIsTodoFormModalOpen(true);
  }

  const handleEditSave = async (todoData) => { // new todo
    if(editTodo)  // current state of the edit todo
      await updateTodo({...editTodo, text : todoData.text})  // merge them together
    else
      await createTodo(todoData);
    await refreshTodos();
    handleCloseTodoFormModal();
  }
  
  // Modal
  const handleCloseTodoFormModal = () => setIsTodoFormModalOpen(false);


  return (
    
      <div className = "container">
        <div className = "todoapp">
            <h1> What`s the plan today? </h1>
          </div>
          <div className="btn-text-center">
            <button className = "btn btn-default todo-button" onClick={() => handleEditStart(null)}><strong>Add todo</strong></button>
          </div>
        
          <TodoList 
            todos = {todos}
            onDelete = {handleDelete}
            onEdit = {handleEditStart}
            />
          <TodoForm
              key = {(editTodo) ? editTodo._id : tempID}
              todo = {editTodo}
              isOpen = {isTodoFormModalOpen}
              onSave = {handleEditSave}
              onClose = {handleCloseTodoFormModal}
            />
            <div className="alert alert-default todo-left"><strong>({todos.filter(todo => !todo.complete).length})</strong> left to do!</div> 
      </div>
  );
}

export default App;

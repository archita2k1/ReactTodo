import React, {useState, useEffect} from 'react';
import './App.css';
// Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  
  // State Stuff
  // [initialState, function that is going to change the state]
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  // RUN ONCE when the app starts
  useEffect(()=> {
    getLocalTodos();
  }, []);
  // USE EFFECT
  useEffect(()=> {
    // console.log("hey");
    filterHandler();
    saveLocalTodos();
  },[todos, status])
//  Functiond 
const filterHandler = () => {
  switch(status) {
    case 'complete':
      setFilteredTodos(todos.filter((todo) => 
        todo.completed === true
      ))
      break;
    case 'incomplete' :
      setFilteredTodos(todos.filter((todo) => 
        todo.completed === false
      ))
      break;
    default:
      setFilteredTodos(todos);
      break;
  }
}
// Save To Local - won't delete on referesh
const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};
const getLocalTodos = () => {
    if(localStorage.getItem('todos')=== null) {
    localStorage.setItem('todos', JSON.stringify([]));
  }
  else {
    let todoLocal= JSON.parse(localStorage.getItem('todos'));
    // console.log(todoLocal);
    setTodos(todoLocal);
  }
};
  return (
    <div className="App">
      <header>Archi's To Do List</header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}
      setStatus={setStatus}
      />
      
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
    </div> 
    
  );
}

export default App;

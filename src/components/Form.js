import React from 'react';


const Form = ({setInputText, todos, setTodos, inputText, setStatus, status})=> {
  // Here I can write JS code and function
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
        ...todos, 
        {text: inputText, completed : false, id: Math.random()* 1000}
      ]);
      setInputText("");
  };
  const statusHandler = (e) => {
      // console.log(e.target.value);
      setStatus(e.target.value);
      
  }
 return(
   <form>
    <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler}/>
    <button type="submit" className="todo-button" onClick={submitTodoHandler}>
     <i className="fas fa-plus-square"></i>
    </button>
    <div className="select">
     <select onChange={statusHandler} name="todos" className="filter-todo">
      <option value="all">All</option>
      <option value="complete">Complete</option>
      <option value="incomplete">Incomplete</option>
     </select>
    </div>
   </form>
 );
}
export default Form;
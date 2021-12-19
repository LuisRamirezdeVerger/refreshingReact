import React, { useState, useRef } from "react";
import Todolist from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(e) {}
  const name = todoNameRef.current.value; //Access the value on our <input ref=.../>
  if (name === "") return;
  // Clear the box content
  todoNameRef.current.value = null;
  return (
    <>
      <Todolist todos={todos} />
      {/* Reference the element in our HTML */}
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}> Add to do</button>
      <button> Clear completed</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;

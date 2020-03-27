import React, { useState } from "react";

function App() {
  const [state, updateState] = useState({
    newTodo: "",
    todos: []
  });

  function handleTextChange(e) {
    const newTodo = e.target.value;
    updateState(prevState => ({ ...prevState, newTodo }));
  }

  function handleAdd(e) {
    updateState(prevState => {
      const todos = [...prevState.todos, prevState.newTodo];
      const newTodo = "";
      return { newTodo, todos };
    });
  }
  const todos = state.todos.map(t => <li>{t}</li>);
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleTextChange} type="text" value={state.newTodo} />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{todos.length > 0 ? todos : <li>An item</li>}</ul>
      </div>
    </div>
  );
}

export default App;

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

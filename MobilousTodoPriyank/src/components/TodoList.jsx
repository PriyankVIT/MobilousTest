import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  completedToggleTodo,
  deleteTodo,
} from "../features/todoSlice";
import Filter from "./Filter";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };
  const handleToggle = (id) => {
    dispatch(completedToggleTodo(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <h1>Todo List</h1>
      <Filter />
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new Todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos
          ? todos.map((todo) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default TodoList;

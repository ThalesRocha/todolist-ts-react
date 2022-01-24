import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((oldTodos) => [...oldTodos, { id: Math.random().toString(), text: text }]);
    console.log(text);
  };

  const todoDeleteHandler = (id: string) => {
    setTodos((oldTodos) => oldTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}></NewTodo>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
